import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ auth }) => {
  const { isAuthenticated, login, logout } = auth;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated() && (
        <li>
          <Link to="/car-list">Cars</Link>
        </li>
        )}
        {isAuthenticated() && (
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        )}
        <li>
          <button type="button" onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? 'Log Out' : 'Log In'}
          </button>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  auth: null,
};

Navbar.propTypes = {
  auth: PropTypes.object || null,
};

const mapStateToProps = ({ User }) => ({ User });

export default connect(mapStateToProps)(Navbar);
