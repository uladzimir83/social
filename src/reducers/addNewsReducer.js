import { ADD_PROFILE_NEWS } from '../actions/actions';

let initialState = [];

export const addNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_NEWS:
            return [...state, action.news];
        default:
            return state;
    }
}