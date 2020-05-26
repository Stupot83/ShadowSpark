import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthenticationToken from "./config/setAuthenticationToken";
import { setCurrentDev, logoutDev } from "./actions/authenticationActions";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import Landing from "./components/scaffolding/Landing";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/protected-route/protectedRoute";
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import HamburgerMenu from "./components/home/HamburgerMenu";

// Check for token to keep the Dev logged in
if (localStorage.jwtToken) {
    // Set the auth token header auth
    const token = localStorage.jwtToken;
    setAuthenticationToken(token);
    // Decode the token and get the Dev information
    const decoded = jwt_decode(token);
    // Set the Dev and isAuthenticated
    reduxStore.dispatch(setCurrentDev(decoded));
    // Check for an expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout the Dev if token has expired
        reduxStore.dispatch(logoutDev());
        // Redirect the Dev to login form
        window.location.href = "./login";
    }
}

function App() {
    return (
        <Provider store={reduxStore}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Registration} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/home" component={Home} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
