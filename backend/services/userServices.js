import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import tokenServices from './tokenServices.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-errors.js';

class UserServices {
    async registration(email, login, password) {
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
            throw ApiError.BadRequest(`User with this email '${email}' is not registered`);
        }
        const isPassActual = bcrypt.compareSync(password, userInBase.password);
        if (isPassActual == false) {
            throw ApiError.BadRequest(`Wrong password`);
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