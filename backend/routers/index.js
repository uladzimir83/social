import { Router } from "express";
import authRouter from './authRouter.js';
import newsRouter from './newsRouter.js';
import userRouter from './userRouter.js';

const router = new Router();

router.use('/auth', authRouter);
router.use('/news', newsRouter);
router.use('/user', userRouter);

export default router;