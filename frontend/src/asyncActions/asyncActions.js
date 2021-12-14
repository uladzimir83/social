import axios from "axios";
import jwt_decode from "jwt-decode";
import { setFullNews, setProfileData } from "../actions/actions";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor);

export const login = async (userData) => {
    const {data} = await $host.post('api/user/login', userData);
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
}

export const registration = async (userData) => {
    const {data} = await $host.post('api/user/registration', userData);
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const fetchUserData = () => {
    return function(dispatch) {
        axios.get('http://localhost:3001/userdata')
            .then(response => {dispatch(setProfileData(response.data))});
    }
}

export const fetchNews = () => {
    return function(dispatch) {
        axios.get('http://localhost:3001/news')
            .then(response => {
                console.log(response);
                dispatch(setFullNews(response.data))})
    }
}

export const addNews = (newsData) => {
    axios.post('http://localhost:3001/news', newsData);
}