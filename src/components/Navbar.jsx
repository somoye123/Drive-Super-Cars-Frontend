import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = ({ auth }) => {
  const { isAuthenticated, login, logout } = auth;
  const activeStyle = { color: '#F15B2A' };
  return (

    <header className="px-md-5 navbar-light bg-white fixed-top">
      <nav className="navbar navbar-expand-lg px-md-5">
        <h3 className="navbar-brand text-danger font-weight-bold">Drive Super Cars</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto align-items-center">
            <li>
              <NavLink to="/" className="nav-link" activeStyle={activeStyle} exact>Home</NavLink>
            </li>
            {isAuthenticated() && (
            <li>
              <NavLink to="/car-list" className="nav-link" activeStyle={activeStyle}>Cars</NavLink>
            </li>
            )}
            {isAuthenticated() && (
            <li>
              <NavLink to="/appointments" className="nav-link" activeStyle={activeStyle}>Appointments</NavLink>
            </li>
            )}
            <li>
              <button
                type="button"
                className={`${isAuthenticated() ? 'btn-danger' : 'btn-success'} btn px-3 py-2`}
                onClick={isAuthenticated() ? logout : login}
              >
                {isAuthenticated() ? 'Log Out' : 'Log In'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
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
