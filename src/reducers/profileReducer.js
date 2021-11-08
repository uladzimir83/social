import { ADD_PROFILE_DATA } from '../actions/actions';
import { ADD_PROFILE_STATUS } from '../actions/actions';

export const profileReducer = (state = {user: []}, action) => {
    switch (action.type) {
        case ADD_PROFILE_DATA:
            return {
                ...state, user: [...state.user, ...action.data]
            };
        case ADD_PROFILE_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
}