import axios from "axios";
import { setFullNews, setProfileData, setProfileNews } from "../actions/actions";
import { getCurrentDate } from "../lib/getCurrentDate";

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

export const addNews = (newsData) => (dispatch) => {
    axios.post('http://localhost:3001/news', newsData)
    .then((response) => dispatch(setProfileNews(newsData))
    .catch(err => {
        console.error(err);
    })
)}