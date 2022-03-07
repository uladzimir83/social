import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router.post('user', userController.addInfo);
router.get('user', userController.getInfo);
router.put('/user', userController.updateInfo);
router.delete('/user', userController.deleteInfo);

export default router;