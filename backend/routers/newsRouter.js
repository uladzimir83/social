import { Router } from "express";
import newsController from "../controllers/newsController.js";

const router = new Router();

router.post('/news', newsController.addNews);
router.get('/news', newsController.getAllNews);
router.get('/news/:id', newsController.getOneNews);
router.put('/news', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);

export default router;