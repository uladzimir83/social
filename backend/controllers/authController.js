import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import tokenServices from '../services/tokenServices.js';
import UserDto from '../dtos/user-dto.js';

class authController {
    async registration (req, res) {
        try {
            const {username, password} = req.body;
            if(!username || !password) {
                return res.status(400).json({message: 'Имя или пароль не введены'});
            }
            const condidate = await User.findOne({where: {username}});
            if (condidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = await User.create({username, password: hashPassword});
            const userDto = new UserDto(user);
            const tokens = tokenServices.generateTokens({...userDto});
            await tokenServices.saveToken(userDto.id, tokens.refreshToken);
            return res.json({
                ...tokens,
                user: userDto
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login (req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({where: {username}});
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