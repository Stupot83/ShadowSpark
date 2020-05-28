import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import errorReducer from "./errorReducer";
import storiesReducer from "./storiesReducer";

export default combineReducers({
  auth: authenticationReducer,
  errors: errorReducer,
  stories: storiesReducer
});