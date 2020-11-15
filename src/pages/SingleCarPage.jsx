import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { loadCar, loadCarSuccess } from '../redux/actions/carAction';
import { createAppointment } from '../api/userApi';

const SingleCar = ({
  Car, loadCar, loadCarSuccess, auth, User,
}) => {
  const { id } = useParams();
  const loadSingleCarDetails = () => {
    const token = auth.getAccessToken();
    loadCar(id, token);
  };

  React.useEffect(() => {
    loadCarSuccess({});
    loadSingleCarDetails();
  }, [id]);

  if (!Car) return <h2 className="section-title">no car to display</h2>;

  const {
    name,
    description,
  } = Car;
  return (
    <section className="car-section">
      <button type="button" className="btn mt-4 section-title banner-btn" onClick={() => createAppointment(User.id, Car.id, auth.getAccessToken())}>
        book test drive
      </button>
      <div className="detail">
        <img src={Car.img_url} alt={name} />
        <div className="detail-info">
          <p>
            <span className="detail-data">name :</span>
            {' '}
            {name}
          </p>
          <p>
            <span className="detail-data">description  :</span>
            {' '}
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

SingleCar.defaultProps = {
  auth: null,
  Car: null,
  User: null,
};

SingleCar.propTypes = {
  auth: PropTypes.object || null,
  Car: PropTypes.object || null,
  User: PropTypes.object || null,
  loadCar: PropTypes.func.isRequired,
  loadCarSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Car, User }) => ({ Car, User });

const mapDispatchToProps = { loadCar, loadCarSuccess };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCar);
