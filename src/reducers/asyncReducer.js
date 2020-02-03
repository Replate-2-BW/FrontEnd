import { FETCH_TOGGLE, FETCH_SUCCESS } from "../actions";

const initialState = {};

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOGGLE:
      return {
        ...state,
        isFetching: !state.isFetching,
        error: action.payload ? action.payload : ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        // action.payload
        isFetching: false,
        error: ""
      };
    default:
      return state;
  }
};
