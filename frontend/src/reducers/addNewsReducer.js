import { ADD_FULL_NEWS, ADD_PROFILE_NEWS, CLEAN_NEWS_ARRAY } from '../actions/actions';


export const addNewsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PROFILE_NEWS:
            return [...state, action.news];
        case ADD_FULL_NEWS:
            return [...state, ...action.news]
        case CLEAN_NEWS_ARRAY:
            return []
        default:
            return state;
    }
}