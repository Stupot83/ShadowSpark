import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../home/Navbar";
import HamburgerMenu from "../home/HamburgerMenu";

class Home extends Component {
    

    render() {
        return (
            <div>
               <Navbar />
               <HamburgerMenu />
            </div>
        );
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(Home));
