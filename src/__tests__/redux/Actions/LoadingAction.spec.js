import * as types from '../../../redux/actions/actionTypes';
import LoadingAction from '../../../redux/actions/loadingAction';

describe('Loading Action Creator', () => {
  it('should create a SET_LOADING action', () => {
    // arrange
    const status = false;
    const expectedAction = { type: types.SET_LOADING, status };

    // act
    const action = LoadingAction(status);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
