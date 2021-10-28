import { userData } from '../Store/Store';
export const ADD_INITIAL_DATA = 'ADD_INITIAL_DATA';

export const setInitialData = (data) => ({
    type: ADD_INITIAL_DATA,
    payload: data,
});

export const initialReducer = (state = userData, action) => {
    switch (action.type) {
        case ADD_INITIAL_DATA:
            return {
                ...state, userData: action.payload
            };
        default:
            return state;
    }
}

