import User from '../models/User.js';
import newsServices from '../services/newsServices.js';

class userController {
    async addInfo (req, res) {
        try {
            const data = await User.create(req.body);
            res.json(data);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'add data error'})
        }
    }

    async getInfo (req, res) {
        try {
            const info = await User.find();
            return res.json(info);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'get all info error'})
        }
    }

    async updateInfo (req, res) {
        try {
            if (!req.body._id) {
                throw new Error('Id не задан')
            }
            const updateInfo = await User.findByIdAndUpdate(req.body._id, req.body, {new: true});


            return res.json(updateInfo);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'update info error'})
        }
    }

    async deleteInfo (req, res) {
        try {
            if (!id) {
                throw new Error('Id не задан')
            }
            const info = await User.findByIdAndDelete(req.params.id);
            return res.json(info);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'delete info error'})
        }
    }
}

export default new userController();