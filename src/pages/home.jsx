import React, { Component } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Form from "../components/form";
import Modal from "../components/modal";
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

    return (
      <div>
        <Header />
        <div style={{ height: "300px" }}></div>
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

export default Home;
