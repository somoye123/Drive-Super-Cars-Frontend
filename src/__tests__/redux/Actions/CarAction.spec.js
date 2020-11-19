import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as CarActions from '../../../redux/actions/carAction';
import * as types from '../../../redux/actions/actionTypes';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const car = {
  id: 2,
  img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--297f7e9b42d4499d371240d62fff073b6b5c90c2/BMW%20m1.jpg',
  name: 'BMW M1',
  description: 'The BMW M1 (model code E26) is a mid-engined sports car produced by German automotive manufacturer BMW from 1978 to 1981. The resulting car was sold to the public, from 1978 to 1981, as the BMW M1. It is the first mid-engine BMW automobile to be mass-produced, the second is the i8 plug-in hybrid sports car.',
};

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Car Thunk', () => {
    it('should create SET_CAR when loading car', () => {
      fetchMock.mock('*', {
        body: car,
        headers: { 'content-type': 'application/json', Authorization: 'Bearer jkgjdlfdlfkl' },
      });

      const expectedActions = [{ type: types.SET_CAR, car }];

      const store = mockStore({ meal: {} });
      return store.dispatch(CarActions.loadCar(5, 'token')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Car Action Creator', () => {
  it('should create a SET_CAR action', () => {
    // arrange
    const car = null;
    const expectedAction = { type: types.SET_CAR, car };

    // act
    const action = CarActions.loadCarSuccess(car);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
