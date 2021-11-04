import { ADD_PROFILE_DATA } from '../actions/actions';
import { ADD_PROFILE_STATUS } from '../actions/actions';
import { userData } from '../Store/Store';

export const profileReducer = (state = userData, action) => {
    switch (action.type) {
        case ADD_PROFILE_DATA:
            return {
                ...state, userData: action.payload
            };
        case ADD_PROFILE_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
}