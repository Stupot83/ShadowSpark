import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="registration-container">
                <div className="registration-header">Register</div>

                <form
                    className="registration-form"
                    noValidate
                    onSubmit={this.onSubmit}
                >
                    <div className="registration-section">
                        <label>
                            <div className="registration-label">Name</div>
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
                            <div className="registration-label">Email</div>
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
                            <div className="registration-label">Password</div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                autoComplete="off"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.password}
                            </div>
                        </label>
                    </div>

                    <div className="registration-section">
                        <label>
                            <div className="registration-label">
                                Confirm Password
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                autoComplete="off"
                                className="registration-field"
                            />
                            <div className="registration-error">
                                {errors.password2}
                            </div>
                        </label>
                    </div>

                    <div className="registration-button">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Sign-Up
                        </Button>
                    </div>
                    <div className="registration-bottom">
                        <p>
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;
