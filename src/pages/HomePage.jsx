import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadUser } from '../redux/actions/userAction';

const HomePage = ({ auth, loadUser, User }) => {
  const loadUserProfile = () => {
    let body;
    const token = auth.getAccessToken();
    auth.getProfile((profile, error) => {
      if (error) throw new Error(error);
      body = {
        username: profile.nickname,
        email: profile.email,
      };
    });
    setTimeout(() => loadUser(body, token), 1000);
  };

  React.useEffect(() => {
    if (auth.isAuthenticated() && (Object.keys(User).length === 0 && User.constructor === Object)) {
      loadUserProfile();
    }
  }, []);

  return (
    <main className="defaultHero d-flex align-items-center justify-content-center px-4 px-md-0">
      <section className="banner text-white">
        <h1>Welcome to Drive Super Cars</h1>
        <div />
        <p>Your home of mind-blowing rides</p>
        <Link to="/car-list" className="banner-btn">
          our cars
        </Link>
      </section>
    </main>
  );
};

HomePage.defaultProps = {
  auth: null,
  User: null,
};

HomePage.propTypes = {
  auth: PropTypes.object || null,
  User: PropTypes.object || null,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ User }) => ({ User });

const mapDispatchToProps = { loadUser };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
