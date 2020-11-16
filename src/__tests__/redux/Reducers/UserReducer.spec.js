import UserReducer from '../../../redux/reducers/userReducer';
import * as UserActions from '../../../redux/actions/userAction';

describe('User Reducer', () => {
  it('should update redux state user when passed SET_USER', () => {
    // arrange
    const initialState = {};
    const user = {
      username: 'Somoye Ayotunde',
      email: 'somoye.ayotunde@gmail.com',
    };
    const action = UserActions.loadUserSuccess(user);

    // act
    const newState = UserReducer(initialState, action);

    // assert
    expect(newState).toEqual(user);
  });
});
