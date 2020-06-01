import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authenticationActions";
import "../../sass/Login.scss";
import Button from "@material-ui/core/Button";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If User is logged in and clicks on login page they are redirected to home
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/display");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/display"); // Redirect User to Home Page once logged in
    }
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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="Login_container">
        <div id="formHeader" className="Login_header">
          Login
        </div>

        <form className="Login_form" noValidate onSubmit={this.onSubmit}>
          <div className="Login_section">
            <label>
              <div id="emailHeader" className="Login_label">
                Email
              </div>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                autoComplete="off"
                className="Login_field"
              />
              <div className="Login_error">
                {errors.email}
                {errors.emailnotfound}
              </div>
            </label>
          </div>

          <div className="Login_section">
            <label>
              <div id="passwordHeader" className="Login_label">
                Password
              </div>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                autoComplete="off"
                className="Login_field"
              />
              <div className="Login_error">
                {errors.password}
                {errors.passwordincorrect}
              </div>
            </label>
          </div>

          <div className="Login_button">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="signInButton"
            >
              Sign-In
            </Button>
          </div>
          <div className="Login_bottom">
            <p id="redirectMessage">
              Don't have an account?{" "}
              <Link id="registerLink" to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
