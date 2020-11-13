import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
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
    <section className="section meal-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <img src={`${process.env.REACT_APP_SERVER_BLOB_PATH}${Car.img_url}`} alt="car" />
      <p>{description}</p>
      <button type="button" onClick={() => createAppointment(User.id, Car.id, auth.getAccessToken())}>test drive</button>
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
