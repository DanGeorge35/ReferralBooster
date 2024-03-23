import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import NoPage from "./pages/404";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Login from "./pages/login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let BASEURL = "https://cadencepub.com/production/";
    BASEURL = "http://localhost:5000/development/";
    return (
      <div>
        <Router>
          <Routes>
            <Route index element={<Home BASEURL={BASEURL} />} />
            <Route path="/" element={<Home BASEURL={BASEURL} />} />
            <Route path="/home" element={<Home BASEURL={BASEURL} />} />
            <Route path="/About" element={<About BASEURL={BASEURL} />} />
            <Route path="/contact" element={<Contact BASEURL={BASEURL} />} />
            <Route
              path="/reservation"
              element={<Reservation BASEURL={BASEURL} />}
            />

            <Route path="/privacy" element={<Privacy BASEURL={BASEURL} />} />
            <Route path="/terms" element={<Terms BASEURL={BASEURL} />} />
            <Route path="/login" element={<Login BASEURL={BASEURL} />} />
            <Route path="*" element={<NoPage BASEURL={BASEURL} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
