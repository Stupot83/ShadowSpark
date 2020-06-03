import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HamburgerMenu from "./navigation/HamburgerMenu";
import Navbar from "./navigation/Navbar";
import Home from "./home/Home";
import "../../../src/sass/Interface.scss";

class Interface extends Component {
  render() {
    return (
      <div className="Display">
        <Navbar />
        <HamburgerMenu />        
        <Home />
      </div>
    );
  }
}

Interface.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Interface));
