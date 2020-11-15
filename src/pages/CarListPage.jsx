import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCars } from '../redux/actions/carsAction';
import Car from '../components/Car';

const CarList = ({ auth, Cars, loadCars }) => {
  const loadApplicationCars = () => {
    const token = auth.getAccessToken();
    loadCars(token);
  };

  const cars = Cars.map(car => <Car key={car.id} car={car} />);

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
    <section className="super-cars">
      <div className="section-title">
        <h4>Super Cars</h4>
        <div />
      </div>
      <div className="super-cars-center">
        {cars}
      </div>
    </section>
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
