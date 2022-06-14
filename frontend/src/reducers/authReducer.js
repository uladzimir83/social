import { SET_AUTH_DATA, USER_IS_AUTH, SET_LOADER } from "../actions/actions";

let defaultState = {
    isAuth: false,
    isLoading: false,
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
            };
        case SET_LOADER:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}