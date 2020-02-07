import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  profile: {
    username: "",
    password: "",
    phoneNumber: "",
    Business: "",
    BusinessAddress: ""
  },
  error: ""
};

export const fetchProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
