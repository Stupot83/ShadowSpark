import {
  CREATE_STORY,
  UPDATE_STORY,
  DELETE_STORY,
  GET_STORY,
  STORY_LOADING,
  GET_STORIES,
  STORIES_LOADING
} from "../actions/types";

const initialState = {
  stories: [],
  story: [],
  storyLoading: false,
  storiesLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_STORY:
      return {
        ...state,
        stories: [action.payload, ...state.stories]
      };

    case UPDATE_STORY:
      let index = state.stories.findIndex(
        story => story._id === action.payload._id
      );

      state.stories.splice(index, 1);

      return {
        ...state,
        stories: [action.payload, ...state.stories]
      };

    case DELETE_STORY:
      return {
        ...state,
        stories: state.stories.filter(story => story._id !== action.payload)
      };

    case GET_STORY:
      return {
        ...state,
        story: action.payload,
        storyLoading: false
      };

    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
        storiesLoading: false
      };

    case STORY_LOADING:
      return {
        ...state,
        storyLoading: true
      };

    case STORIES_LOADING:
      return {
        ...state,
        storiesLoading: true
      };

    default:
      return state;
  }
}