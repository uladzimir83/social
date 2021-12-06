import News from "../models/News.js";
import fileService from "./fileServices.js";

class newsServices {
    async addNews(news, picture) {
        const fileName = fileService.saveFile(picture);
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