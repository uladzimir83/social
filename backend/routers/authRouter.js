import { Router } from "express";
import authController from "../controllers/authController.js";
import validate from "../middleware/validate.js";
import { validateLogin, validateRegistration } from "../middleware/validateTypes.js";

const router = new Router();

router.post('/registration', validate(validateRegistration), authController.registration);

router.post('/login', validate(validateLogin), authController.login);
router.get('/refresh', authController.refresh);
router.get('/logout', authController.logout);

export default router;