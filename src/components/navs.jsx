import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navs extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar-expand-lg  fixed-top p-1 "
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            className="container text-center"
            style={{ height: "73px", width: "100vw" }}
          >
            <a
              className="navbar-brand p-0 "
              href="#"
              style={{ outline: "none" }}
            >
              <img src="logo.png" alt="Cadence" style={{ height: "70px" }} />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

Navs.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};

export default Navs;
