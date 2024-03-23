import React, { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import * as Icons from "@mui/icons-material";
import Swal from "sweetalert2";
import axios from "axios";
import PropTypes from "prop-types";

const Form = (props) => {
  const showAlert = (data) => {
    Swal.fire({
      title: data.title, //"success",
      text: data.text, //"success",
      icon: data.icon, //"success",
      confirmButtonText: data.button,
    });
  };
  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  const openRegistrationSuccess = () => {
    document.getElementById("registerpane").style.display = "none";
    // document.getElementById("registeremailaddress").value = email;
    document.getElementById("registered").style.display = "block";
  };

  const openNewUser = (email) => {
    document.getElementById("registeremailaddress").value = email;
    document.getElementById("registerpane").style.display = "block";
  };

  const [fullname, setfullname] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openExistingUser = (user) => {
    document.getElementById("loginemailaddress").value = user.Email;
    document.getElementById("loginpane").style.display = "block";
  };
  // Define a state to manage form submission

  const handleLoginFormSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("email:", email);

    openBackdrop();
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${props.BASEURL}api/v1/referral/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      response.data.credentials = formData;
      localStorage.setItem("ReferralLoginUser", JSON.stringify(response.data));
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
      }
    } finally {
      closeBackdrop();
    }
  };

  const handleRegisterFormSubmission = async (pane, e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", fullname);
    console.log("whatsapp:", whatsapp);
    console.log("email:", email);
    console.log("password:", password);

    openBackdrop();
    const formData = {
      Email: email,
      Password: password,
      FullName: fullname,
      Whatsapp: whatsapp,
    };

    try {
      const response = await axios.post(
        `${props.BASEURL}api/v1/referral`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      console.log("result", response);
      if (response.data.code == 201) {
        openRegistrationSuccess(response.data.data.Email);
      } else {
        showAlert({
          title: "Error",
          text: response.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
      }
    } finally {
      closeBackdrop();
    }
  };

  const handleEmailFormSubmission = async (pane, e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(pane);
    // Perform any form submission logic here, e.g., send data to a server
    console.log("email:", email);

    openBackdrop();
    const formData = {
      Email: email,
    };

    try {
      const response = await axios.post(
        `${props.BASEURL}api/v1/referral/check`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      console.log("result", response);
      if (response.data.code == 201) {
        pane.style.display = "none";
        openExistingUser(response.data.data.Email);
      } else if (response.data.code == 202) {
        pane.style.display = "none";
        openNewUser(response.data.data.Email);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
      }
    } finally {
      closeBackdrop();
    }

    // Reset the form fields
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <form
        onSubmit={(event) => handleEmailFormSubmission(event.target, event)}
      >
        <div className="mb-3">
          <label htmlFor="emailaddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control  "
            id="emailaddress"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            id="fullnameHelp"
            className="form-text"
            style={{ color: "#000", fontWeight: "400" }}
          >
            Earn exciting rewards as your referrals engage with Cadence Pub
            services.<br></br>
            Don&apos;t miss out on the chance to earn effortlessly with Cadence
            Pub. Start referring today and let the rewards roll in!
          </div>
        </div>
        <br></br>

        <button
          type="submit"
          className="btn btn-success  w-100"
          style={{
            color: "black",
            backgroundColor: "#1bb66d",
            fontWeight: "700",
          }}
        >
          Continue
        </button>
      </form>

      <form
        id="loginpane"
        onSubmit={handleLoginFormSubmission}
        style={{ display: "none" }}
        className="animated  fadeInUp delay-2s"
      >
        <div className="mb-3">
          <label htmlFor="loginemailaddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control  "
            id="loginemailaddress"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled="true"
          />
          <br></br>

          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control  "
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>

        <button
          type="submit"
          className="btn btn-success  w-100"
          style={{
            color: "black",
            backgroundColor: "#1bb66d",
            fontWeight: "700",
          }}
        >
          Login to Account
        </button>
      </form>

      <form
        id="registerpane"
        onSubmit={(event) => handleRegisterFormSubmission(event.target, event)}
        style={{ display: "none" }}
        className="animated  fadeInUp delay-2s"
      >
        <div className="mb-3">
          <label htmlFor="registerfullname" className="form-label">
            Enter your Fullname
          </label>
          <input
            type="text"
            className="form-control  "
            id="registerfullname"
            placeholder="Your Fullname"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <br></br>
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp Number
          </label>
          <input
            type="text"
            className="form-control  "
            id="whatsapp"
            placeholder="Whatsapp Phone Number"
            value={whatsapp}
            onChange={(e) => setwhatsapp(e.target.value)}
          />
          <br></br>

          <label htmlFor="registeremailaddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control  "
            id="registeremailaddress"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled="true"
          />
          <br></br>
          <label htmlFor="registerpassword" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control  "
            id="registerpassword"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>

        <button
          type="submit"
          className="btn btn-success  w-100"
          style={{
            color: "black",
            backgroundColor: "#1bb66d",
            fontWeight: "700",
          }}
        >
          Register your Account
        </button>
      </form>
      <div
        id="registered"
        style={{ display: "none" }}
        className="animated  fadeInUp delay-2s"
      >
        <div className="text-center">
          <br></br>
          <div
            className="p-3 mb-4"
            style={{
              display: "inline-block",
              backgroundColor: "#ddd",
              borderRadius: "100px",
              color: "green",
            }}
          >
            <Icons.ThumbUp />
          </div>
          <br></br>
          <h2 className="text-center text-success">Registration Successful!</h2>
          <br></br>
          <br></br>
          <h5 className="text-center" style={{ color: "#999" }}>
            Please check your email and confirm your account.
          </h5>
          <br></br>
          <button
            className="btn btn-success  w-100"
            style={{
              color: "black",
              backgroundColor: "#1bb66d",
              fontWeight: "700",
            }}
            onClick={() => window.location.reload()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired, // Make sure it's a function and required
  BASEURL: PropTypes.string,
};

export default Form;
