import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { addNewsReducer } from '../reducers/addNewsReducer';
import { authReducer } from '../reducers/authReducer';
import { profileReducer } from '../reducers/profileReducer';

const rootReducer = combineReducers(
    {
      userInfo: profileReducer,
      news: addNewsReducer,
      auth: authReducer,
    }
);

export const store = createStore(rootReducer, applyMiddleware(thunk));