import axios from "axios";

const setAuthenticationToken = (token) => {
    if (token) {
        // Apply auth token to every request if user is logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthenticationToken;
