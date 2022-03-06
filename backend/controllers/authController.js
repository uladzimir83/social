import User from '../models/User.js';
import Role from '../models/Role.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateAccessToken = (id, login, roles) => {
    return jwt.sign(
        {id, login, roles},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class authController {
    async registration (req, res) {
        try {
            const {username, password} = req.body;
            if(!username || !password) {
                return res.status(400).json({message: 'Имя или пароль не введены'});
            }
            const condidate = await User.findOne({username});
            if (condidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();
            const token = generateAccessToken(user.id, user.username, user.roles)
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
            const token = generateAccessToken(user._id, user.username, user.roles);
            return res.json({token});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'})
        }
    }

    async check(req, res, next) {
        const token = generateAccessToken(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export default new authController();