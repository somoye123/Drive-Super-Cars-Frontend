import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Callback({ auth }) {
  const location = useLocation();
  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }, [location]);

  return (
    <h1>Loading...</h1>
  );
}

Callback.defaultProps = {
  auth: null,
};
Callback.propTypes = {
  auth: PropTypes.object || null,
};

export default Callback;
