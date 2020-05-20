import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutDev } from "../../actions/authenticationActions";
import Button from "@material-ui/core/Button";

class Home extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutDev();
    };

    render() {
        return (
            <div>
                <Button
                    onClick={this.onLogoutClick}
                    variant="contained"
                    color="primary"
                >
                    Logout
                </Button>
            </div>
        );
    }
}

Home.propTypes = {
    logoutDev: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutDev })(Home);
