import { check } from 'express-validator';
import {User} from '../models/models.js';

const validateRegistration = [
    
    check('email', 'The email field cannot be empty').notEmpty(),
    check('email', 'The email field is filled with an error').isEmail(),
    check('email').custom(async (value) => {
        return await User.findOne({where: {email: value}}).then(userMail => {
            if (userMail) {
                console.log(userMail);
            return Promise.reject('E-mail already in use');
            }
        });
    }),
    check('login', 'Username cannot be empty').notEmpty(),
    check('login').custom(async (value) => {
        return await User.findOne({where: {login: value}}).then(userMail => {
            if (userMail) {
            return Promise.reject('This login already in use');
            }
        });
    }),
    check('password', 'Password must be more than 4 and less than 10 characters').isLength({min:4, max:10}),
];

const validateLogin = [
    check('email', 'The email field cannot be empty').notEmpty(),
    check('email', 'The email field is filled with an error').isEmail(),
];

export {validateLogin, validateRegistration};