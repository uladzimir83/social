import { check } from 'express-validator';
import {User} from '../models/models.js';

const validResult = [
        check('email', "Поле email заполнено с ошибкой").isEmail(),
        check('email').custom(async (value) => {
            return await User.findOne({where: {email: value}}).then(userMail => {
                if (userMail) {
                return Promise.reject('E-mail already in use');
                }
            });
            }),
        check('login', "Имя пользователя не может быть пустым").notEmpty(),
        check('login').custom(async (value) => {
            return await User.findOne({where: {login: value}}).then(userMail => {
                if (userMail) {
                return Promise.reject('This login already in use');
                }
            });
            }),
        check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10}),
        ]

export default validResult;