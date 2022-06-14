<<<<<<< HEAD
import { SET_AUTH_DATA, USER_IS_AUTH, SET_LOADER } from "../actions/actions";

let defaultState = {
    isAuth: false,
    isLoading: false,
=======
import { SET_AUTH_DATA, USER_IS_AUTH, SET_IS_LOADING } from "../actions/actions";

let defaultState = {
    isAuth: false,
    isLoading: true,
>>>>>>> f921be14238e08bd754c3e8f8e9a66649424668c
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
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}