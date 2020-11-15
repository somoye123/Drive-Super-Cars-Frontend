import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAppointments } from '../redux/actions/appointmentsAction';
import Car from '../components/Car';

const AppointmentList = ({
  User, Appointments, auth, loadAppointments,
}) => {
  const loadUserAppointments = () => {
    const token = auth.getAccessToken();
    loadAppointments(User.id, token);
  };

  const appointment = Appointments.map(car => <Car key={car.id} car={car} />);

  React.useEffect(() => {
    loadUserAppointments();
  }, []);

  if (!Appointments) return <h2 className="section-title">no Appointments to display</h2>;

  return (
    <section className="super-cars">
      <div className="section-title">
        <h4>Test Drive Appointments</h4>
        <div />
      </div>
      <div className="super-cars-center">
        {appointment}
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
};

const mapStateToProps = ({ Appointments, User }) => ({ Appointments, User });

const mapDispatchToProps = { loadAppointments };

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
