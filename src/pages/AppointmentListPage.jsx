import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadAppointments } from '../redux/actions/appointmentsAction';
import LoadingBar from '../components/Loading';
import Car from '../components/Car';
import setLoadingStatus from '../redux/actions/loadingAction';

const AppointmentList = ({
  User,
  Appointments,
  auth,
  loadAppointments,
  setLoadingStatus,
  Loading,
}) => {
  const loadUserAppointments = () => {
    const token = auth.getAccessToken();
    loadAppointments(User.id, token);
  };

  React.useEffect(() => {
    setLoadingStatus(false);
    loadUserAppointments();
    setLoadingStatus(false);
  }, []);

  if (Loading) return <LoadingBar />;

  if (!Loading && !Appointments) return <h2 className="section-title">No Appointments to display kindly try again!</h2>;

  if (Appointments && Appointments.length < 1) {
    return (
      <main className="defaultHero d-flex align-items-center justify-content-center px-4 px-md-0">
        <section className="banner text-white">
          <h1>You currently have no Appointment</h1>
          <div />
          <p>Click link below to book a car</p>
          <Link to="/car-list" className="banner-btn">
            our cars
          </Link>
        </section>
      </main>
    );
  }

  return (
    <section className="super-cars">
      <div className="section-title">
        <h4>Your Appointments</h4>
      </div>
      <div className="super-cars-center">
        {Appointments.map(car => <Car key={car.id} car={car} />)}
      </div>
    </section>
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
  Loading: PropTypes.bool.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Appointments, User, Loading }) => ({ Appointments, User, Loading });

const mapDispatchToProps = { loadAppointments, setLoadingStatus };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
