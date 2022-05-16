import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import tokenServices from './tokenServices.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-errors.js';

class UserServices {
    async registration(email, login, password) {
        const checkMail = await User.findOne({where: {email}});
        if (checkMail) {
            throw ApiError.BadRequest(`Пользователь с данными '${email}' уже существует`);
        }

        const checkLogin = await User.findOne({where: {login}});
        if (checkLogin) {
            throw ApiError.BadRequest(`Пользователь с данными '${login}' уже существует`);
        }

        const hashPassword = bcrypt.hashSync(password, 3);
        const user = await User.create({email, login, password: hashPassword});

        const userDto = new UserDto(user);
        const tokens = tokenServices.generateTokens({...userDto});
        await tokenServices.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async login(email, password) {
        const userInBase = await User.findOne({where: {email}});

        if (!userInBase) {
            throw ApiError.BadRequest(`Пользователь с таким email ${email} не зарегистрирован`);
        }

        const isPassActual = bcrypt.compare(password, userInBase.password);
        if (!isPassActual) {
            throw ApiError.BadRequest(`Неверно указан пароль`);
        }

        const userDto = new UserDto(userInBase);
        const tokens = tokenServices.generateTokens({...userDto});

        await tokenServices.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenServices.validateRefreshToken(refreshToken);
        const tokenfromDb = await tokenServices.findToken(refreshToken);

        if (!userData || !tokenfromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await User.findOne({where: {id: userData.id}});

        const userDto = new UserDto(user);

        const tokens = tokenServices.generateTokens({...userDto});

        await tokenServices.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenServices.removeToken(refreshToken);
        return token;
    }
}

export default new UserServices();