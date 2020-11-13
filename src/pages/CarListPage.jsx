import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCars } from '../redux/actions/carsAction';

const CarList = ({ auth, Cars, loadCars }) => {
  const loadApplicationCars = () => {
    const token = auth.getAccessToken();
    loadCars(token);
  };

  React.useEffect(() => {
    if (Cars && Cars.length < 1) {
      loadApplicationCars();
    }
  }, []);

  if (!Cars) {
    return (
      <h2 className="section-title">no cars were returned</h2>
    );
  }

  return (
    <>
      <section className="section">
        {Cars.map(car => (
          <div className="meals-center" key={car.id}>
            <img src={`${process.env.REACT_APP_SERVER_BLOB_PATH}${car.img_url}`} alt="car" />
            <p>{car.name}</p>
            <p>{car.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

CarList.defaultProps = {
  auth: null,
  Cars: null,
};

CarList.propTypes = {
  auth: PropTypes.object || null,
  Cars: PropTypes.arrayOf(PropTypes.object) || null,
  loadCars: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Cars }) => ({ Cars });

const mapDispatchToProps = dispatch => ({
  loadCars: token => dispatch(loadCars(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
