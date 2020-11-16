import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import loadingAction from '../../redux/actions/loadingAction';
import { loadAppointmentsSuccess } from '../../redux/actions/appointmentsAction';
import { loadCarsSuccess } from '../../redux/actions/carsAction';
import { loadCarSuccess } from '../../redux/actions/carAction';
import { loadUserSuccess } from '../../redux/actions/userAction';

describe('Integration test for Redux flow', () => {
  const store = createStore(rootReducer);
  const status = false;
  const car = {
    id: 2,
    img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--297f7e9b42d4499d371240d62fff073b6b5c90c2/BMW%20m1.jpg',
    name: 'BMW M1',
    description: 'The BMW M1 (model code E26) is a mid-engined sports car produced by German automotive manufacturer BMW from 1978 to 1981. The resulting car was sold to the public, from 1978 to 1981, as the BMW M1. It is the first mid-engine BMW automobile to be mass-produced, the second is the i8 plug-in hybrid sports car.',
  };
  const cars = [{
    id: 1,
    img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf3540dbe0dcd69d717c91926e284bd7b3d3d67f/BMW%20i8.jpg',
    name: 'BMW i8',
    description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The battery capacity of both, BMW i8 Roadster and the i8 Coupé, was increased to 11.6 kWh in 2018, allowing the NEDC electric range to rise to 55 km (34 mi) for the coupé and to 53 km (33 mi) for the roadster.',
  },
  {
    id: 2,
    img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--297f7e9b42d4499d371240d62fff073b6b5c90c2/BMW%20m1.jpg',
    name: 'BMW M1',
    description: 'The BMW M1 (model code E26) is a mid-engined sports car produced by German automotive manufacturer BMW from 1978 to 1981. The resulting car was sold to the public, from 1978 to 1981, as the BMW M1. It is the first mid-engine BMW automobile to be mass-produced, the second is the i8 plug-in hybrid sports car.',
  }];
  const appointment = [{
    id: 1,
    img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf3540dbe0dcd69d717c91926e284bd7b3d3d67f/BMW%20i8.jpg',
    name: 'BMW i8',
    description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The battery capacity of both, BMW i8 Roadster and the i8 Coupé, was increased to 11.6 kWh in 2018, allowing the NEDC electric range to rise to 55 km (34 mi) for the coupé and to 53 km (33 mi) for the roadster.',
  },
  {
    id: 2,
    img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--297f7e9b42d4499d371240d62fff073b6b5c90c2/BMW%20m1.jpg',
    name: 'BMW M1',
    description: 'The BMW M1 (model code E26) is a mid-engined sports car produced by German automotive manufacturer BMW from 1978 to 1981. The resulting car was sold to the public, from 1978 to 1981, as the BMW M1. It is the first mid-engine BMW automobile to be mass-produced, the second is the i8 plug-in hybrid sports car.',
  }];
  const user = {
    username: 'Somoye Ayotunde',
    email: 'somoye.ayotunde@gmail.com',
  };
  it('Should handle updating loading status', () => {
    // act
    const action = loadingAction(status);
    store.dispatch(action);

    // assert
    const updatedLoadingStatus = store.getState().Loading;
    expect(updatedLoadingStatus).toEqual(false);
  });
  it('Should handle updating car object', () => {
    // act
    const action = loadCarSuccess(car);
    store.dispatch(action);

    // assert
    const updatedStateCar = store.getState().Car;
    expect(updatedStateCar).toEqual(car);
  });
  it('Should handle updating cars array', () => {
    // act
    const action = loadCarsSuccess(cars);
    store.dispatch(action);

    // assert
    const updatedStateCars = store.getState().Cars;
    expect(updatedStateCars).toEqual(cars);
  });
  it('Should handle updating appointment array', () => {
    // act
    const action = loadAppointmentsSuccess(appointment);
    store.dispatch(action);

    // assert
    const updatedStateAppointment = store.getState().Appointments;
    expect(updatedStateAppointment).toEqual(appointment);
  });
  it('Should handle updating user object', () => {
    // act
    const action = loadUserSuccess(user);
    store.dispatch(action);

    // assert
    const updatedStateUser = store.getState().User;
    expect(updatedStateUser).toEqual(user);
  });
  it('Should be a combination of all the returned dispatched values', () => {
    //   arrange
    const expectedNewState = {
      Loading: status, Cars: cars, Car: car, Appointments: appointment, User: user,
    };
    // assert
    const newState = store.getState();
    expect(newState).toEqual(expectedNewState);
  });
});
