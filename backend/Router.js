import { Router } from "express";
import { check } from "express-validator";
import controller from './authController.js';
import newsController from './newsController.js';
import authMiddleware from "./middleware/authMiddleware.js";

const router = new Router();

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min: 5, max: 10})
], controller.registration);
router.post('/login', controller.login);
router.get('/auth', authMiddleware, controller.check);

router.post('/news', newsController.addNews);
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getOneNews);
router.put('/news', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);

export default router;