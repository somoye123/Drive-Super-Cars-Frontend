import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { loadCar, loadCarSuccess } from '../redux/actions/carAction';

const SingleCar = ({
  Car, loadCar, loadCarSuccess, auth,
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
    </section>
  );
};

SingleCar.defaultProps = {
  Car: null,
  auth: null,
};

SingleCar.propTypes = {
  Car: PropTypes.object || null,
  auth: PropTypes.object || null,
  loadCar: PropTypes.func.isRequired,
  loadCarSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Car }) => ({ Car });

const mapDispatchToProps = { loadCar, loadCarSuccess };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCar);
