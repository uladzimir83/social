import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const UserData = sequelize.define('userData', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.INTEGER, allowNull: false},
    lastName: {type: DataTypes.INTEGER},
    location: {type: DataTypes.INTEGER},
    dateBirth: {type: DataTypes.INTEGER, allowNull: false},
    placeWork: {type: DataTypes.INTEGER},
    position: {type: DataTypes.INTEGER},
    marital: {type: DataTypes.INTEGER},
    interests: {type: DataTypes.INTEGER},
    education: {type: DataTypes.INTEGER},
    religion: {type: DataTypes.INTEGER},
    animals: {type: DataTypes.INTEGER},
    family: {type: DataTypes.INTEGER},
});

const TokenModel = sequelize.define('tokenModel', {
    id: {type: DataTypes.INTEGER, primaryKey: true, references: {model: 'users', key: 'id'}},
    refreshToken: {type: DataTypes.STRING, allowNull: false}
})

export {
    User,
    UserData,
    TokenModel,
};