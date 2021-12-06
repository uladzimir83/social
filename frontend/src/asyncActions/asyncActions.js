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
    console.log(newsData);
    axios.post('http://localhost:3001/news', newsData);
}