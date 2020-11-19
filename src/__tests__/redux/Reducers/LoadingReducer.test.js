import LoadingReducer from '../../../redux/reducers/loadingReducer';
import LoadingAction from '../../../redux/actions/loadingAction';

describe('Loading Reducer', () => {
  it('should update loading status when passed SET_LOADING', () => {
    // arrange
    const initialState = true;
    const status = false;
    const action = LoadingAction(status);

    // act
    const newState = LoadingReducer(initialState, action);

    // assert
    expect(newState).toEqual(false);
  });
});
