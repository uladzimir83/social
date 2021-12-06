import jwt from 'jsonwebtoken';
import { secret } from '../config.js';

export default function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.autharisation.split(' ')[1];

        if (!token) {
            res.status(403).json({message: "Пользователь не авторизован"})
        }

        const decodeData = jwt.verify(token, secret)
        req.user = decodeData;
        next()
    } catch (e) {
        res.status(403).json({message: "Пользователь не авторизован"})
    }
}