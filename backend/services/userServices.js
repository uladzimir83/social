import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import tokenServices from './tokenServices.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-errors.js';

class UserServices {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с такими данными ${email} уже существует`);
        }

        const hashPassword = bcrypt.hashSync(password, 3);
        const user = await User.create({email, password: hashPassword});

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