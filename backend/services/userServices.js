import db from '../db.js';
import {User} from '../models/models.js';
import bcrypt from 'bcryptjs';
import tokenServices from './tokenServices.js';
import UserDto from '../dtos/user-dto.js';

class UserServices {
    async registration(username, password) {
        const candidate = await User.findOne({where: {username}});
        if (candidate) {
            throw new Error(`Пользователь с такими данными ${username} уже существует`);
        }

        const hashPassword = bcrypt.hashSync(password, 3);
        const user = await User.create({username, password: hashPassword});

        const userDto = new UserDto(user);
        const tokens = tokenServices.generateTokens({...userDto});
        await tokenServices.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}

export default new UserServices();