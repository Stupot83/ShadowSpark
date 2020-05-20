import { SET_CURRENT_DEV, DEV_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    dev: {},
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_DEV:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case DEV_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
