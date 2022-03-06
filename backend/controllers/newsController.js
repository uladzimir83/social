import News from '../models/News.js';
import newsServices from '../services/newsServices.js';

class newsController {
    async addNews (req, res) {
        try {
            const news = await newsServices.addNews(req.body, req.files.picture);
            res.json(news);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'add news error'})
        }
    }

    async getAllNews (req, res) {
        try {
            const news = await newsServices.getAllNews();
            return res.json(news);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'get all news error'})
        }
    }

    async getOneNews (req, res) {
        try {
            const news = await newsServices.getOneNews(req.params.id);
            return res.json(news);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'get one news error'})
        }
    }

    async updateNews (req, res) {
        try {
            const updateNews = await newsServices.updateNews(req.body);
            return res.json(updateNews);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'update news error'})
        }
    }

    async deleteNews (req, res) {
        try {
            const news = await newsServices.deleteNews(req.params.id);
            return res.json(news);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'delete news error'})
        }
    }
}

export default new newsController();