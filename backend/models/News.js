import mongoose from 'mongoose';

const News = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    photo: {type: String, required: true},
    date: {type: String, required: true},
    title: {type: String, required: true},
    topic: {type: String, required: true},
    text: {type: String, required: true},
    picture: {type: String},
})

export default mongoose.model('News', News);