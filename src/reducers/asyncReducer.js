import {
  FETCH_PICKUPS_START,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  pickup: [
    {
      typeOfFood: "",
      qty: "",
      preferredPickupTime: ""
    }
  ],
  error: ""
};

export const pickupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICKUPS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PICKUPS_SUCCESS:
      return {
        ...state,
        pickup: action.payload,
        isLoading: false
      };
    case FETCH_PICKUPS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
