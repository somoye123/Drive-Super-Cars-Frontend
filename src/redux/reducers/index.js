import { combineReducers } from 'redux';
import User from './userReducer';
import Cars from './carsReducer';
import Car from './carReducer';
import Appointments from './appointmentsReducer';

export default combineReducers({
  User, Cars, Car, Appointments,
});
