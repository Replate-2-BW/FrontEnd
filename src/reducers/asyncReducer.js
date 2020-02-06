import {
  FETCH_PICKUPS_START,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
  UPDATE_PICKUP_START,
  UPDATE_PICKUP_SUCCESS,
  UPDATE_PICKUP_FAILURE,
  DELETE_PICKUP_START,
  DELETE_PICKUP_SUCCESS,
  DELETE_PICKUP_FAILURE
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

export const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PICKUP_START:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_PICKUP_SUCCESS:
      return {
        ...state,
        pickup: action.payload,
        isLoading: false
      };
    case UPDATE_PICKUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PICKUP_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_PICKUP_SUCCESS:
      return {
        ...state,
        pickup: action.payload,
        isLoading: false
      };
    case DELETE_PICKUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
