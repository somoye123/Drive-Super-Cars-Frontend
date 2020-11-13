import { combineReducers } from 'redux';
import User from './userReducer';
import Cars from './carsReducer';
import Car from './carReducer';
import Appointment from './appointmentReducer';

export default combineReducers({
  User, Cars, Car, Appointment,
});
