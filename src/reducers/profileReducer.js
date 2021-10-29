import { ADD_PROFILE_DATA } from '../actions/actions';
import { userData } from '../Store/Store';

export const profileReducer = (state = userData, action) => {
    switch (action.type) {
        case ADD_PROFILE_DATA:
            return {
                ...state, userData: action.payload
            };
        default:
            return state;
    }
}