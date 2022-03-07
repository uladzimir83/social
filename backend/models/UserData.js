import mongoose from 'mongoose';

const UserData = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: {type: String, required: true},
    dateBirth: {type: String, required: true},
    placeWork: {type: String, required: true},
    position: {type: String, required: true},
    marital: {type: String, required: true},
    interests: {type: Object, required: true},
    education: {type: Object, required: true},
    religion: {type: String, required: true},
    animals: {type: Object, required: true},
    family: {type: Object, required: true},
    photo: {type: String, required: true},
})

export default mongoose.model('UserData', UserData);