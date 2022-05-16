import { Router } from "express";
import authController from "../controllers/authController.js";
import validResult from "../middleware/authMiddleware.js"
import { validateAuthMiddleware } from "../middleware/validateAuthMiddleware.js";
import { check } from 'express-validator';
import {User} from '../models/models.js';

const router = new Router();

router.post('/registration', validResult, validateAuthMiddleware, authController.registration);
router.post('/login', authController.login);
router.get('/refresh', authController.refresh);
router.get('/logout', authController.logout);

export default router;