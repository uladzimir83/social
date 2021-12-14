import User from './models/User.js';
import Role from './models/Role.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';


const generateAccessToken = (id, login, roles) => {
    return jwt.sign(
        {id, login, roles},
        process.env.REACT_APP_SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'ошибка при регистрации', errors})
            }
            const {username, password} = req.body;
            const condidate = await User.findOne({username});
            if (condidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();
            const token = generateAccessToken(user.id, user.username)
            return res.json({token})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login (req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: 'Введен неверный пароль'})
            }
            const token = generateAccessToken(user._id, user.username);
            return res.json({token});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'})
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export default new authController();