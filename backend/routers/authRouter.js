import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/refresh', authController.refresh);
router.get('/logout', authController.logout);

export default router;