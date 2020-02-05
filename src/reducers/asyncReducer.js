import {
  FETCH_PICKUP_START,
  FETCH_PICKUP_SUCCESS,
  FETCH_PICKUP_FAILURE
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
    case FETCH_PICKUP_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PICKUP_SUCCESS:
      return {
        ...state,
        pickup: action.payload,
        isLoading: false
      };
    case FETCH_PICKUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
