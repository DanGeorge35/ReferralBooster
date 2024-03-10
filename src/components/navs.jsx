import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navs extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar navbar-expand-lg  border-2 border-warning fixed-top p-1 "
          style={{
            backgroundColor: "#eee",
          }}
        >
          <div className="container" style={{ height: "73px", width: "100vw" }}>
            <a
              className="navbar-brand p-0 "
              href="#"
              style={{ outline: "none" }}
            >
              <img
                src="https://cadencepub.com/icon.jpg"
                alt="Cadence"
                style={{ height: "70px" }}
              />
            </a>

            <div
              className="navbar-collapse  collapse d-none d-none-md d-block-lg"
              id="navbarSupportedContent"
            ></div>

            <span
              className="navbar-toggler   d-block d-lg-none "
              onClick={this.props.toggleSideMenu}
            >
              <span className="material-symbols-outlined ">lunch_dining</span>
            </span>
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
