import { USER_IS_AUTH } from "../actions/actions";

const userAuth = false;

export const authReducer = (state = userAuth, action) => {
    switch (action.type) {
        case USER_IS_AUTH:
            return {
                ...state, userAuth: action.authUser
            };
        default:
            return state;
    }
}