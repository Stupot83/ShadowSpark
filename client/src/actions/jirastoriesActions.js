import axios from "axios";

import {
  CREATE_JIRASTORY,
  UPDATE_JIRASTORY,
  DELETE_JIRASTORY,
  GET_JIRASTORY,
  JIRASTORY_LOADING,
  GET_JIRASTORIES,
  JIRASTORIES_LOADING
} from "./types";

// Create Jirastory
export const createJirastory = jirastoryData => dispatch => {
  axios
    .post("/api/jirastories/create", jirastoryData)
    .then(res =>
      dispatch({
        type: CREATE_JIRASTORY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Update Jirastory
export const updateJirastory = jirastoryData => dispatch => {
  axios
    .patch("/api/jirastories/update", jirastoryData)
    .then(res =>
      dispatch({
        type: UPDATE_JIRASTORY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Delete Jirastory
export const deleteJirastory = (id, history) => dispatch => {
  axios
    .delete(`/api/jirastories/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_JIRASTORY,
        payload: id
      })
    )
    .then(res => history.push("/home"))
    .catch(err => console.log(err));
};

// Get specific jirastory by id
export const getJirastory = id => dispatch => {
  dispatch(setJirastoryLoading());
  axios
    .get(`/api/jirastories/${id}`)
    .then(res =>
      dispatch({
        type: GET_JIRASTORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JIRASTORY,
        payload: null
      })
    );
};

// Get all jirastories for specific dev
export const getJirastories = () => dispatch => {
  dispatch(setJirastoriesLoading());
  axios
    .get("/api/jirastories")
    .then(res =>
      dispatch({
        type: GET_JIRASTORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JIRASTORIES,
        payload: null
      })
    );
};

// Jirastory loading
export const setJirastoryLoading = () => {
  return {
    type: JIRASTORY_LOADING
  };
};

// Jirastories loading
export const setJirastoriesLoading = () => {
  return {
    type: JIRASTORIES_LOADING
  };
};