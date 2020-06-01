import axios from "axios";
import {
  CREATE_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  GET_STORY,
  STORY_LOADING,
  GET_STORIES,
  STORIES_LOADING
} from "./types";

// Create Story
export const createStory = storyData => dispatch => {
  axios
    .post("/api/stories/create", storyData)
    .then(res =>
      dispatch({
        type: CREATE_STORY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Update Story
export const updateStory = storyData => dispatch => {
  axios
    .put("/api/stories/update", storyData)
    .then(res =>
      dispatch({
        type: UPDATE_STORY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Delete Story
export const deleteStory = (id, history) => dispatch => {
  axios
    .delete(`/api/stories/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_STORY,
        payload: id
      })
    )
    .then(res => history.push("/display"))
    .catch(err => console.log(err));
};

// Get Story by id
export const getStory = id => dispatch => {
  dispatch(setStoryLoading());
  axios
    .get(`/api/stories/${id}`)
    .then(res =>
      dispatch({
        type: GET_STORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STORY,
        payload: null
      })
    );
};

// Get all Stories for User
export const getStories = () => dispatch => {
  dispatch(setStoriesLoading());
  axios
    .get("/api/stories")
    .then(res =>
      dispatch({
        type: GET_STORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STORIES,
        payload: null
      })
    );
};

// Story loading
export const setStoryLoading = () => {
  return {
    type: STORY_LOADING
  };
};

// Stories loading
export const setStoriesLoading = () => {
  return {
    type: STORIES_LOADING
  };
};
