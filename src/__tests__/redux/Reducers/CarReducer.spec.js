import CarReducer from '../../../redux/reducers/carReducer';
import * as CarActions from '../../../redux/actions/carAction';

describe('Car Reducer', () => {
  it('should update redux state car when passed SET_CAR', () => {
    // arrange
    const initialState = {};
    const car = {
      id: 2,
      img_url: 'https://drive-super-cars.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--297f7e9b42d4499d371240d62fff073b6b5c90c2/BMW%20m1.jpg',
      name: 'BMW M1',
      description: 'The BMW M1 (model code E26) is a mid-engined sports car produced by German automotive manufacturer BMW from 1978 to 1981. The resulting car was sold to the public, from 1978 to 1981, as the BMW M1. It is the first mid-engine BMW automobile to be mass-produced, the second is the i8 plug-in hybrid sports car.',
    };
    const action = CarActions.loadCarSuccess(car);

    // act
    const newState = CarReducer(initialState, action);

    // assert
    expect(newState).toEqual(car);
  });
});
