import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                            <div className="login-label">Email</div>
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

export default Login;
