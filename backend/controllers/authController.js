import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import userServices from '../services/userServices.js';
import tokenServices from '../services/tokenServices.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-errors.js';

class authController {
    async registration (req, res, next) {
        try {
            const {username, password} = req.body;
            if(!username || !password) {
                return next(ApiError.BadRequest('Введенные данные некорректны'));
            }
            
            const userData = await userServices.registration(username, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({userData});
        } catch (e) {
            console.log(e);
            next(e);
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