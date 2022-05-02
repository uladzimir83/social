import { SET_AUTH_DATA, USER_IS_AUTH } from "../actions/actions";

let defaultState = {
    isAuth: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_IS_AUTH:
            return {
                ...state, isAuth: action.authData
            };
        case SET_AUTH_DATA:
            return {
                ...state, authData: action.authData
            }
        default:
            return state;
    }
}