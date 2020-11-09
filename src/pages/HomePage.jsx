import React from "react";
import PropTypes from "prop-types";

const HomePage = ({ auth }) => {
  const { login } = auth;
  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={login}>
        Log In
      </button>
    </>
  );
};

HomePage.defaultProps = {
  auth: null,
};

HomePage.propTypes = {
  auth: PropTypes.object || null,
};

export default HomePage;
