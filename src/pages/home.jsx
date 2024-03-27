import React, { Component } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Form from "../components/form";
import Modal from "../components/modal";
import { NavLink } from "react-router-dom";
import Dashboard from "../components/dashboard";
class Home extends Component {
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
    const { showModal } = this.state;

    const LoginUser = localStorage.getItem("ReferralLoginUser");

    if (LoginUser) {
      return (
        <div>
          <Header />
          <div className="container-fluid" style={{ marginTop: "90px" }}>
            <Dashboard User={LoginUser} />
          </div>

          <Modal
            title="Join Community"
            showModal={showModal}
            toggleModal={this.toggleModal}
            content={<Form toggleModal={this.toggleModal} />}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="container-fluid" style={{ marginTop: "90px" }}>
            <div className="row">
              <div
                className="col-lg-5 "
                style={{
                  backgroundImage: "url(/refer.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minHeight: "370px",
                }}
              >
                <p></p>
              </div>
              <div
                className="col-lg-7 "
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
                  <p style={{ paddingBottom: "30px" }}>
                    <b style={{ fontSize: "30px", color: "#1bb66d" }}>
                      <span style={{ fontSize: "70px" }}>#</span>
                      EarnWithCadence:
                    </b>
                  </p>

                  <h3> Empower Your Network, Maximize Your Earnings!</h3>
                  <div>
                    Welcome to the Cadence Pub Referral Program - where earning
                    is as simple as sharing! Unlock exciting rewards by
                    referring your friends and acquaintances to join our growing
                    community.
                    <span className="d-none d-md-block">
                      With fantastic opportunities to earn, you&apos;re just a
                      step away from enjoying the perks
                    </span>
                  </div>
                  <p></p>
                  <NavLink
                    to="/login"
                    className="btn pe-5 px-5 mt-5"
                    style={{
                      color: "black",
                      backgroundColor: "#1bb66d",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </NavLink>
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
}

export default Home;
