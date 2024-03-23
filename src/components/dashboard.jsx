import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Dashboard extends Component {
  render() {
    return <div className="">{this.props.User}</div>;
  }
}

Dashboard.propTypes = {
  User: PropTypes.any.isRequired, // Make sure it's a function and required
};

export default Dashboard;
