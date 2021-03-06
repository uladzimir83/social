import jwt from 'jsonwebtoken';
import {TokenModel} from '../models/models.js';
import dotenv from 'dotenv';
dotenv.config();

class TokenServices {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '15m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({where: {id: userId}});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        
        const token = await TokenModel.create({id: userId, refreshToken});
        return token;
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({where: {refreshToken}});
        return tokenData.refreshToken;
    }

    async removeToken(refreshToken) {
        const tokenData = await TokenModel.destroy({where: {refreshToken}});
        return tokenData;
    }
}

export default new TokenServices();