import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { addNewsReducer } from '../reducers/addNewsReducer';
import { profileReducer } from '../reducers/profileReducer';

const rootReducer = combineReducers(
    {
      userInfo: profileReducer,
      profileNews: addNewsReducer,
    }
);

export const store = createStore(rootReducer, applyMiddleware(thunk));