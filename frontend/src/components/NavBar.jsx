import React from "react";
import PropTypes from "prop-types";

function NavBar({ auth }) {
  return auth ? <h1> {auth.user.username}</h1> : <h1>NavBar</h1>;
}

NavBar.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NavBar;
