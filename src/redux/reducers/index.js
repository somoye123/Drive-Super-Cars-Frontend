import { combineReducers } from 'redux';
import User from './userReducer';
import Cars from './carsReducer';

export default combineReducers({
  User, Cars,
});
