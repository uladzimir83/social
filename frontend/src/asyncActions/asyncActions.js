import axios from "axios";
import jwt_decode from "jwt-decode";
import { setFullNews, setProfileData } from "../actions/actions";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$host.interceptors.request.use(authInterceptor);

export const login = async (userData) => {
    const {data} = await $host.post('api/auth/login', userData);
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
}

export const registration = async (userData) => {
    const {data} = await $host.post('api/auth/registration', userData);
        localStorage.setItem('token', data.refreshToken);
        return jwt_decode(data.refreshToken);
}

export const check = async () => {
    const {data} = await $host.get('api/auth/auth');
    localStorage.setItem('token', data.token);
    
}

export const fetchUserData = () => {
    return function(dispatch) {
        axios.get('/userdata')
            .then(response => {
                dispatch(setProfileData(response.data))
            });
    }
}

export const fetchNews = () => {
    return function(dispatch) {
        axios.get('http://localhost:3001/news')
            .then(response => {
                dispatch(setFullNews(response.data))})
    }
}

export const addNews = (newsData) => {
    axios.post('http://localhost:3001/news', newsData);
}

export const addInfo = (info) => {
    console.log(info);
    axios.post('http://localhost:3001/api/user/user', info);
}