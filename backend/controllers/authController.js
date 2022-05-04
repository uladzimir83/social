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
            const {email, password} = req.body;
            if(!email || !password) {
                return next(ApiError.BadRequest('Введенные данные некорректны'));
            }
            
            const userData = await userServices.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json({userData});
        } catch (e) {
            next(e);
        }
    }

    async login (req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userServices.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json({userData});
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        const {refreshToken} = req.cookies;
        const userData = await userServices.refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json({userData});
    }

    async logout(req, res, next) {
        try {
            console.log('dfdfffffffffffffffffff');
            const {refreshToken} = req.cookies;
            const token = await userServices.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

export default new authController();