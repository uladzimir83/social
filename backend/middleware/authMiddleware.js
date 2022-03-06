import jwt from 'jsonwebtoken';

export default function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({message: "Пользователь не авторизован1"})
        }

        const decodeData = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodeData;
        next()
    } catch (e) {
        res.status(401).json({message: "Пользователь не авторизован12"})
    }
}