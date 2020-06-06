import axios from "axios";

import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODOS,
  TODOS_LOADING
} from "./types";

// Create Todo
export const createTodo = todoData => dispatch => {
  axios
    .post("/api/todos/create", todoData)
    .then(res =>
      dispatch({
        type: CREATE_TODO,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Get Todos by Story id
export const getTodos = id => dispatch => {
  dispatch(setTodosLoading());
  axios
    .get(`/api/todos/${id}`)
    .then(res =>
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TODOS,
        payload: null
      })
    );
};

// Delete Todo
export const deleteTodo = id => dispatch => {
  axios
    .delete(`/api/todos/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    )
    .catch(err => console.log(err));
};

// Update Todo
export const updateTodo = todoData => dispatch => {
  axios
    .patch("/api/todos/update", todoData)
    .then(res =>
      dispatch({
        type: UPDATE_TODO,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Todos loading
export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};
