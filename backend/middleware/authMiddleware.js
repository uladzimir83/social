import jwt from 'jsonwebtoken';

export default function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorisation.split(' ')[1];

        if (!token) {
            res.status(403).json({message: "Пользователь не авторизован"})
        }

        const decodeData = jwt.verify(token, process.env.REACT_API_SECRET_KEY)
        req.user = decodeData;
        next()
    } catch (e) {
        res.status(403).json({message: "Пользователь не авторизован"})
    }
}