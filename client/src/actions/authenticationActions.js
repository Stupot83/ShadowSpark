import axios from "axios";
import setAuthenticationToken from "../config/setAuthenticationToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_DEV, DEV_LOADING } from "./types";

// Register the new Dev
export const registerDev = (devData, history) => (dispatch) => {
    axios
        .post("/api/devs/register", devData)
        .then((res) => history.push("/login")) // Redirect to login when login is successful
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// Login the Dev and get the token
export const loginDev = (devData) => (dispatch) => {
    axios
        .post("/api/devs/login", devData)
        .then((res) => {
            // Save and set the token in localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set the token to the Auth header
            setAuthenticationToken(token);
            // Decode the token to get the data for the Dev
            const decoded = jwt_decode(token);
            // Set the current Dev
            dispatch(setCurrentDev(decoded));
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// Set the logged in Dev
export const setCurrentDev = (decoded) => {
    return {
        type: SET_CURRENT_DEV,
        payload: decoded,
    };
};

// Dev loading
export const setDevLoading = () => {
    return {
        type: DEV_LOADING,
    };
};

// Log the Dev out
export const logoutDev = () => (dispatch) => {
    // Remove the token from local storage
    localStorage.removeItem("jwtToken");
    // Remove the auth header for future requests
    setAuthenticationToken(false);
    // Set the current Dev to an empty object {} which sets isAuthenticated to false
    dispatch(setCurrentDev({}));
};
