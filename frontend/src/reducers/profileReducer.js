import { ADD_PROFILE_DATA } from '../actions/actions';
import { ADD_PROFILE_STATUS } from '../actions/actions';

const userInfo = {
    userInfo: {}
};

export const profileReducer = (state = userInfo, action) => {
    switch (action.type) {
        case ADD_PROFILE_DATA:
            return {
                ...state, userInfo: {...state.userInfo, ...action.data}
            };
        case ADD_PROFILE_STATUS:
            return {
                ...state, userInfo: {...state.userInfo, status: action.status}
            };
        default:
            return state;
    }
}