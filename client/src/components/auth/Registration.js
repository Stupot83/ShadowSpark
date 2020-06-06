import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authenticationActions";
import "../../sass/Registration.scss";
import Button from "@material-ui/core/Button";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If User is logged in and clicks on registration page they are redirected to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/display");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="Registration_container">
        <div id="formHeader" className="Registration_header">
          Register
        </div>

        <form className="Registration_form" noValidate onSubmit={this.onSubmit}>
          <div className="Registration_section">
            <label>
              <div id="nameHeader" className="Registration_label">
                Name
              </div>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                autoComplete="off"
                className="Registration_field"
              />
              <div className="Registration_error">{errors.name}</div>
            </label>
          </div>

          <div className="Registration_section">
            <label>
              <div id="emailHeader" className="Registration_label">
                Email
              </div>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                autoComplete="off"
                className="Registration_field"
              />
              <div className="Registration_error">{errors.email}</div>
            </label>
          </div>

          <div className="Registration_section">
            <label>
              <div id="passwordHeader" className="Registration_label">
                Password
              </div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className="Registration_field"
              />
              <div className="Registration_error">{errors.password}</div>
            </label>
          </div>

          <div className="Registration_section">
            <label>
              <div id="confirmPasswordHeader" className="Registration_label">
                Confirm Password
              </div>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className="Registration_field"
              />
              <div className="Registration_error">{errors.password2}</div>
            </label>
          </div>

          <div className="Registration_button">
            <Button
              id="signUpButton"
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign-Up
            </Button>
          </div>
          <div className="Registration_bottom">
            <p id="redirectMessage">
              Already have an account?{" "}
              <Link id="loginLink" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Registration)
);