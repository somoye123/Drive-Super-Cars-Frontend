import { combineReducers } from 'redux';
import User from './userReducer';
import Cars from './carsReducer';
import Car from './carReducer';

export default combineReducers({
  User, Cars, Car,
});
