import mongoose from 'mongoose';

const UserData = new mongoose.Schema({
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    location: {type: String, required: false},
    dateBirth: {type: String, required: false},
    placeWork: {type: String, required: false},
    position: {type: String, required: false},
    marital: {type: String, required: false},
    interests: {type: Object, required: false},
    education: {type: Object, required: false},
    religion: {type: String, required: false},
    animals: {type: Object, required: false},
    family: {type: Object, required: false},
})

export default mongoose.model('UserData', UserData);