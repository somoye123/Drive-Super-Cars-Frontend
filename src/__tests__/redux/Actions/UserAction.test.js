import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as UserActions from '../../../redux/actions/userAction';
import * as types from '../../../redux/actions/actionTypes';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const user = {
  username: 'Somoye Ayotunde',
  email: 'somoye.ayotunde@gmail.com',
};

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load User Thunk', () => {
    it('should create SET_USER when loading car', () => {
      fetchMock.mock('*', {
        body: user,
        headers: { 'content-type': 'application/json', Authorization: 'Bearer jkgjdlfdlfkl' },
      });

      const expectedActions = [{ type: types.SET_USER, user }];

      const store = mockStore({ user: {} });
      return store.dispatch(UserActions.loadUser({}, 'token')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Car Action Creator', () => {
  it('should create a SET_CAR action', () => {
    // arrange
    const user = null;
    const expectedAction = { type: types.SET_USER, user };

    // act
    const action = UserActions.loadUserSuccess(user);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
