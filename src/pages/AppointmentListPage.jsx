import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadAppointments } from '../redux/actions/appointmentsAction';

const AppointmentList = ({
  User, Appointments, auth, loadAppointments,
}) => {
  const loadUserAppointments = () => {
    const token = auth.getAccessToken();
    loadAppointments(User.id, token);
  };

  React.useEffect(() => {
    loadUserAppointments();
  }, []);

  if (!Appointments) return <h2 className="section-title">no Appointments to display</h2>;

  return (
    <>
      <section className="section">
        {Appointments.map(car => (
          <div className="meals-center" key={car.id}>
            <img src={`${process.env.REACT_APP_SERVER_BLOB_PATH}${car.img_url}`} alt="car" />
            <p>{car.name}</p>
            <p>{car.description}</p>
            <Link to={`/car/${car.id}`} className="btn btn-primary btn-details">
              details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

AppointmentList.defaultProps = {
  auth: null,
  User: null,
  Appointments: null,
};

AppointmentList.propTypes = {
  User: PropTypes.object || null,
  auth: PropTypes.object || null,
  Appointments: PropTypes.arrayOf(PropTypes.object) || null,
  loadAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Appointments, User }) => ({ Appointments, User });

const mapDispatchToProps = { loadAppointments };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
