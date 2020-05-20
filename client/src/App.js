import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import Navbar from "./components/scaffolding/Navbar";
import Landing from "./components/scaffolding/Landing";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";

function App() {
    return (
        <Provider store={reduxStore}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
