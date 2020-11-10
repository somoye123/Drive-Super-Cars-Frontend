import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = ({ auth }) => {
  const location = useLocation();
  React.useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }, [location]);

  if (/access_token|id_token|error/.test(location.hash)) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

HomePage.propTypes = {
  auth: PropTypes.func.isRequired,
};
export default HomePage;
