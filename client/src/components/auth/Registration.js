import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerDev } from "../../actions/authenticationActions";
import "../../Registration.scss";
import Button from "@material-ui/core/Button";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
        };
    }

    componentDidMount() {
        // If Dev is logged in and clicks on registration page they are redirected to home
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newDev = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        console.log(newDev);

        this.props.registerDev(newDev, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="registration-container">
                <div id="formHeader" className="registration-header">Register</div>

                <form
                    className="registration-form"
                    noValidate
                    onSubmit={this.onSubmit}
                >
                    <div className="registration-section">
                        <label>
                            <div id="nameHeader" className="registration-label">Name</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                                autoComplete="off"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.name}
                            </div>
                        </label>
                    </div>

                    <div className="registration-section">
                        <label>
                            <div id="emailHeader" className="registration-label">Email</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                autoComplete="off"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.email}
                            </div>
                        </label>
                    </div>

                    <div className="registration-section">
                        <label>
                            <div id="passwordHeader" className="registration-label">Password</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.password}
                            </div>
                        </label>
                    </div>

                    <div className="registration-section">
                        <label>
                            <div id="confirmPasswordHeader" className="registration-label">
                                Confirm Password
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.password2}
                            </div>
                        </label>
                    </div>

                    <div className="registration-button">
                        <Button
                            id="signUpButton"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Sign-Up
                        </Button>
                    </div>
                    <div className="registration-bottom">
                        <p id="redirectMessage">
                            Already have an account?{" "}
                            <Link id="loginLink" to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

Registration.propTypes = {
    registerDev: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { registerDev })(
    withRouter(Registration)
);
