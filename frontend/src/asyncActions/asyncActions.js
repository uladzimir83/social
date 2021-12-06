import axios from "axios";
import { setFullNews, setProfileData } from "../actions/actions";

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
                dispatch(setFullNews(response.data))})
    }
}

export const addNews = (newsData) => {
    axios.post('http://localhost:3001/news', newsData);
}

export const login = (userData) => {
    axios.post('http://localhost:3001/auth/login', userData);
}

export const registration = (userData) => {
    axios.post('http://localhost:3001/auth/registration', userData).then(response => {
        console.log(response);
    });
}