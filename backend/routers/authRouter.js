import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/auth', authMiddleware, authController.check);

export default router;