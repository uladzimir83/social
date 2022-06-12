import axios from "axios";
import jwt_decode from "jwt-decode";
import { setFullNews, setProfileData, authUser, setAuthData, setIsLoading } from "../actions/actions";

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
    const response = await $host.post('api/auth/login', userData);
    localStorage.setItem('token', response.data.userData.refreshToken);
    return jwt_decode(response.data.userData.refreshToken);
}

export const registration = async (userData) => {
    const response = await $host.post('api/auth/registration', userData);
    localStorage.setItem('token', response.data.userData.refreshToken);
    return jwt_decode(response.data.userData.refreshToken);
}

export const checkAuth = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get('api/auth/refresh', {withCredentials: true});
            dispatch(authUser(true));
            dispatch(setAuthData(response.data.userData.user));
            dispatch(setIsLoading(false));
            localStorage.setItem('token', response.data.userData.accessToken);
        } catch (e) {
            console.log(e.response?.data);
        } finally {
            
        }
    }
}

export const logout = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get('api/auth/logout', {withCredentials: true});
            localStorage.removeItem('token');
            dispatch(authUser(false));
            dispatch(setAuthData({}));
        } catch (e) {
            console.log(e.response?.data);
        }
    }
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