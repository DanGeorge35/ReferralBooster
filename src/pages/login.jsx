import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Form from "../components/form";
import Modal from "../components/modal";
import PropTypes from "prop-types";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const LoginUser = localStorage.getItem("ReferralLoginUser");
    if (LoginUser) {
      return <Navigate to="/" />;
    }

    const { showModal } = this.state;

    return (
      <div>
        <Header />
        <div className="container-fluid" style={{ marginTop: "50px" }}>
          <div className="row">
            <div
              className="col-lg-5 "
              style={{
                backgroundImage: "url(/refer.jpg)",
                backgroundSize: "contain",
                minHeight: "370px",
              }}
            >
              <p></p>
            </div>
            <div
              className="col-lg-5 "
              style={{
                minHeight: "80vh",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingBottom: "100px",
              }}
            >
              <div>
                <div
                  className="d-none d-lg-block"
                  style={{ height: "200px" }}
                ></div>
                <p style={{ paddingBottom: "0px" }}>
                  <b style={{ fontSize: "30px", color: "#1bb66d" }}>
                    <span style={{ fontSize: "70px" }}>#</span>EarnWithCadence:
                  </b>
                </p>
                <Form BASEURL={this.props.BASEURL} />
                <p></p>

                <p></p>
              </div>
            </div>
          </div>
        </div>

        <Modal
          title="Join Community"
          showModal={showModal}
          toggleModal={this.toggleModal}
          content={<Form toggleModal={this.toggleModal} />}
        />
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  BASEURL: PropTypes.string,
};

export default Login;
