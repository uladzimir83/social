import { Router } from "express";
import authRouter from './authRouter.js';
import newsRouter from './newsRouter.js';

const router = new Router();

router.use('/auth', authRouter);
router.use('/news', newsRouter);

export default router;