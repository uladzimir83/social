import { Router } from "express";
import { check } from "express-validator";
import controller from './controllers/authController.js';
import newsController from './controllers/newsController.js';
import authMiddleware from "./middleware/authMiddleware.js";

const router = new Router();

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min: 5, max: 10})
], controller.registration);
router.post('/login', controller.login);
router.get('/auth', authMiddleware, controller.check);

export default router;