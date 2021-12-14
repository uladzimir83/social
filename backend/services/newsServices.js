import News from "../models/News.js";
import * as uuid from 'uuid';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class newsServices {
    async addNews(news, picture) {
        const img = picture;
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const createNews = await News.create({...news, picture: fileName});
        return createNews;
    }

    async getOneNews (id) {
            if (!id) {
                throw new Error('Id не задан')
            }
            const news = await News.findById(id);
            return news;
    }

    async getAllNews () {
            const news = await News.find();
            return news;
    }

    async updateNews (news) {
            if (!news._id) {
                throw new Error('Id не задан')
            }
            const updateNews = await News.findByIdAndUpdate(news._id, news, {new: true});
            return updateNews;
    }

    async deleteNews (id) {
        if (!id) {
            throw new Error('Id не задан')
        }
        const news = await News.findByIdAndDelete(id);
        return news;
    }
}

export default new newsServices();