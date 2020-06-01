import axios from "axios";
import setAuthenticationToken from "../config/setAuthenticationToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register the new User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // Redirect to login when registration is successful
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login the User and get the token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save and set the token in localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", JSON.stringify(token));
      // Set the token to the Auth header
      setAuthenticationToken(token);
      // Decode the token to get the data for the User
      const decoded = jwt_decode(token);
      // Set the current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set the logged in User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log the User out
export const logoutUser = history => dispatch => {
  // Remove the token from local storage
  localStorage.removeItem("jwtToken");
  // Remove the auth header for future requests
  setAuthenticationToken(false);
  // Set the current User to an empty object {} which sets isAuthenticated to false
  dispatch(setCurrentUser({}));

  history.push("/display");
};
