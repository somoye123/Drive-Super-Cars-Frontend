import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Callback = ({ auth }) => {
  const location = useLocation();
  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error('Invalid callback URL.');
    }
  }, [location]);
  return <h1>Loading...</h1>;
};

Callback.propTypes = {
  auth: PropTypes.func.isRequired,
};
export default Callback;
