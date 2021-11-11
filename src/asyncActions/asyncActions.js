import { setFullNews, setProfileData } from "../actions/actions";

export const fetchUserData = () => {
    return function(dispatch) {
        fetch('http://localhost:8000/user')
            .then(response => response.json())
            .then(json => dispatch(setProfileData(json)));
    }
}

export const fetchNews = () => {
    return function(dispatch) {
        fetch('http://localhost:8000/news')
            .then(response => response.json())
            .then(json => dispatch(setFullNews(json)));
    }
}