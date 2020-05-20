import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginDev } from "../../actions/authenticationActions";
import "../../Login.scss";
import Button from "@material-ui/core/Button";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
    }

    componentDidMount() {
        // If Dev is logged in and clicks on login page they are redirected to home
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home"); // Redirect Dev to Home Page once logged in
        }
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

        const devData = {
            email: this.state.email,
            password: this.state.password,
        };

        console.log(devData);

        this.props.loginDev(devData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="login-container">
                <div className="login-header">Login</div>

                <form
                    className="login-form"
                    noValidate
                    onSubmit={this.onSubmit}
                >
                    <div className="login-section">
                        <label>
                            <div className="login-label">Email</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                autoComplete="off"
                                className="login-field"
                            />
                            <div className="login-error">{errors.email}</div>
                        </label>
                    </div>

                    <div className="login-section">
                        <label>
                            <div className="login-label">Password</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                autoComplete="off"
                                className="login-field"
                            />
                            <div className="login-error">{errors.password}</div>
                        </label>
                    </div>

                    <div className="registration-button">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Sign-In
                        </Button>
                    </div>
                    <div className="registration-bottom">
                        <p className="grey-text text-darken-1">
                            Don't have an account?{" "}
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    loginDev: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { loginDev })(Login);
