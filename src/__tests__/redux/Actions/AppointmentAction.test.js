import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as types from '../../../redux/actions/actionTypes';
import * as AppointmentActions from '../../../redux/actions/appointmentsAction';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
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

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Appointment Thunk', () => {
    it('should create SET_APPOINTMENT when loading appointment', () => {
      fetchMock.mock('*', {
        body: appointment,
        headers: { 'content-type': 'application/json', Authorization: 'Bearer jkgjdlfdlfkl' },
      });

      const expectedActions = [{ type: types.SET_APPOINTMENT, appointment }];

      const store = mockStore({ appointment: [] });
      return store.dispatch(AppointmentActions.loadAppointments(1, 'a')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Meals Action Creator', () => {
  it('should create a SET_MEALS action', () => {
    // arrange
    const appointment = null;
    const expectedAction = { type: types.SET_APPOINTMENT, appointment };

    // act
    const action = AppointmentActions.loadAppointmentsSuccess(appointment);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
