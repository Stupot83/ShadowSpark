import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthenticationToken from "./config/setAuthenticationToken";
import { setCurrentUser, logoutUser } from "./actions/authenticationActions";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import Landing from "./components/scaffolding/Landing";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/protected-route/protectedRoute";
import Interface from "./components/interface/Interface";

import "../src/sass/App.scss";

// Check for token to keep the User logged in
if (localStorage.jwtToken) {
  // Set the auth token header auth
  const token = JSON.parse(localStorage.jwtToken);
  setAuthenticationToken(token);
  // Decode the token and get the User information
  const decoded = jwt_decode(token);
  // Set the User and isAuthenticated
  reduxStore.dispatch(setCurrentUser(decoded));
  // Check for an expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout the User if token has expired
    reduxStore.dispatch(logoutUser());
    // Redirect the User to landing page
    window.location.href = "./";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/display" component={Interface} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
