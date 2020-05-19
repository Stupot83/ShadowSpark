import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/scaffolding/Navbar";
import Landing from "./components/scaffolding/Landing";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Landing} />
            </div>
        </Router>
    );
}

export default App;
