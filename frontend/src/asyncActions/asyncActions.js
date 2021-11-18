import axios from "axios";
import { setFullNews, setProfileData } from "../actions/actions";
import { getCurrentDate } from "../lib/getCurrentDate";

export const fetchUserData = () => {
    return function(dispatch) {
        axios.get('http://localhost:8000/user')
            .then(response => {dispatch(setProfileData(response.data))});
    }
}

export const fetchNews = () => {
    return function(dispatch) {
        axios.get('http://localhost:8000/news')
            .then(response => {dispatch(setFullNews(response.data))})
    }
}

export const addNews = (news) => {
    let newsData = JSON.stringify(news);
    axios.post('http://localhost:8000/news', {newsData});
}