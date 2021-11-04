import { combineReducers } from 'redux';
import { addNewsReducer } from './addNewsReducer';
import { profileReducer } from './profileReducer';

export default combineReducers(
  {
    profileData: profileReducer,
    profileNews: addNewsReducer,
  }
);