import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import * as Icons from "@mui/icons-material";

class Dashboard extends Component {
  render() {
    const concatenateFirstLetters = (str) => {
      let [first, second] = str.split(" ");

      if (!second) {
        return (first[0] + (first[1] || "")).toUpperCase();
      }

      return (first[0] + second[0]).toUpperCase();
    };

    const User = JSON.parse(this.props.User);
    return (
      <div className="" style={{ marginTop: "-10px" }}>
        <div className="container-fluid pt-0 pe-0 px-0">
          <div className="row ">
            <div
              className="col-lg-4 p-0 w3-display-container"
              style={{
                backgroundSize: "cover",
                minHeight: "270px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <div
                className="p-3 "
                style={{
                  minHeight: "90vh",
                  backgroundColor: "#ddd",
                }}
              >
                <div
                  className="card mb-3 "
                  style={{
                    backgroundColor: "#fff",
                    minHeight: "170px",
                    boxShadow: "3px 5px 10px #ddd",
                    overflow: "hidden",
                    opacity: "0.95",
                  }}
                >
                  <div className="row">
                    <div
                      className="col-md-12  text-center "
                      style={{
                        backgroundColor: "#bfe9d5b5",
                        paddingTop: "25px",
                        paddingBottom: "30px",
                      }}
                    >
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          fontSize: "35px",
                          backgroundColor: "#1bb66d",
                          borderRadius: "100px",
                          paddingTop: "12px",
                          fontWeight: "700",
                          display: "inline-block",
                          color: "white",
                        }}
                      >
                        {concatenateFirstLetters(User.data.FullName)}
                      </div>

                      <br></br>
                      <div style={{ marginTop: "10px", color: "green" }}>
                        <b>{User.data.FullName}</b>
                        <br></br>
                        <i>{User.data.Email}</i>
                      </div>
                    </div>
                    <div className="col-md-12  w3-center">
                      <div className="mt-4 w3-text-grey">Referal Code</div>
                      <div className="text-center  pt-1 pb-5">
                        <span style={{ fontSize: "25px", fontWeight: "700" }}>
                          <b>{User.data.UserID}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card "
                  style={{
                    backgroundColor: "#fff",
                    height: "130px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    boxShadow: "3px 5px 10px #ddd",
                  }}
                >
                  <div className="row">
                    <div
                      className="col-6  text-center pt-4 pb-3"
                      style={{ backgroundColor: "#bfe9d5b5" }}
                    >
                      <Icons.Face2
                        style={{ color: "#1bb66d", fontSize: "50px" }}
                      />

                      <br></br>
                      <div className="pt-3">
                        <b>Referrals</b>
                      </div>
                    </div>
                    <div
                      className="col-6  text-center  bg-light "
                      style={{ minHeight: "130px" }}
                    >
                      <div
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          paddingTop: "50px",
                        }}
                      >
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card "
                  style={{
                    backgroundColor: "#fff",
                    height: "130px",
                    overflow: "hidden",
                    marginBottom: "20px",
                    boxShadow: "3px 5px 10px #ddd",
                  }}
                >
                  <div className="row">
                    <div
                      className="col-6  text-center pt-4 pb-3"
                      style={{ backgroundColor: "#bfe9d5b5" }}
                    >
                      <Icons.MonetizationOnRounded
                        style={{ color: "#1bb66d", fontSize: "50px" }}
                      />

                      <br></br>
                      <div className="pt-3">
                        <b>Earnings</b>
                      </div>
                    </div>
                    <div
                      className="col-6  text-center  "
                      style={{ minHeight: "200px" }}
                    >
                      <div
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          paddingTop: "50px",
                        }}
                      >
                        ₦ <span>0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8 w3-border "
              style={{
                minHeight: "84vh",
              }}
            >
              <div className="" style={{ minHeight: "87vh" }}>
                <div className="pe-2 px-2 pt-2 pb-3">
                  <b>Referral Links</b>
                </div>

                <div className="row ">
                  <div className="col-lg-5">
                    <div
                      className="card "
                      style={{
                        backgroundColor: "#fff",
                        height: "520px",
                        overflow: "hidden",
                        marginBottom: "20px",
                        boxShadow: "3px 5px 10px #ddd",
                      }}
                    >
                      <div
                        className="w3-display-container"
                        style={{
                          backgroundImage: "url(./ext1.jpg)",
                          height: "300px",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                        }}
                      >
                        <div
                          style={{
                            height: "300px",
                            backgroundColor: "#00000047",
                          }}
                        >
                          <div
                            className="w3-display-middle w3-text-white text-center"
                            style={{ fontSize: "25px", width: "100%" }}
                          >
                            <b style={{ textShadow: "0px 0px 10px #000" }}>
                              Candence Investment
                            </b>
                          </div>
                        </div>
                      </div>

                      <div className="p-3">
                        <div
                          className="p-3 text-center rounded"
                          style={{
                            border: "2px dashed #999",
                            fontWeight: "700",
                            color: "#1bb66",
                          }}
                        >
                          https://cadencepub.com/signup?{User.data.UserID}
                        </div>
                        <div className="mt-3 w3-center">
                          <div
                            style={{
                              border: "1px solid #bcbcbc",
                              padding: "15px",
                              borderRadius: "10%",
                              display: "inline-block",
                              backgroundColor: "#1bb66",
                              cursor: "pointer",
                            }}
                            className="w3-hover-opacity  m-2"
                          >
                            <Icons.ContentCopy style={{ fontSize: "30px" }} />
                          </div>

                          <div
                            style={{
                              border: "1px solid #bcbcbc",
                              padding: "15px",
                              borderRadius: "10%",
                              display: "inline-block",
                              backgroundColor: "#1bb66",
                              cursor: "pointer",
                            }}
                            className="w3-hover-opacity  m-2"
                          >
                            <Icons.Share style={{ fontSize: "30px" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  User: PropTypes.any.isRequired, // Make sure it's a function and required
};

export default Dashboard;
