import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_PICKUPS_START = "FETCH_PICKUP_START";
export const FETCH_PICKUPS_SUCCESS = "FETCH_PICKUP_SUCCESS";
export const FETCH_PICKUPS_FAILURE = "FETCH_PICKUP_FAILURE";

export const UPDATE_PICKUP_START = "UPDATE_PICKUP_START";
export const UPDATE_PICKUP_SUCCESS = "UPDATE_PICKUP_SUCCESS";
export const UPDATE_PICKUP_FAILURE = "UPDATE_PICKUP_FAILURE";

// This is an async action creator
export const fetchPickups = () => dispatch => {
  dispatch({ type: FETCH_PICKUPS_START });
  axiosWithAuth()
    .get(`/auth/pickup/${localStorage.getItem("ID")}/biz`)
    .then(res => {
      dispatch({ type: FETCH_PICKUPS_SUCCESS, payload: res.data });
      console.log("This is res in fetchPickups: ", res);
    })
    .catch(err => {
      dispatch({ type: FETCH_PICKUPS_FAILURE, payload: err });
      console.log("This is err in fetchPickups: ", err);
    });
};

export const updatePickup = (id, values) => dispatch => {
  dispatch({ type: UPDATE_PICKUP_START });
  console.log("This is id in action creator: ", id)
  console.log("This is values in action creator: ", values)
  axiosWithAuth()
    .put(`/auth/pickup/${id}`, values)
    .then(res => {
      dispatch({ type: UPDATE_PICKUP_SUCCESS, payload: res.data });
      console.log("This is res in updatePickup: ", res);
    })
    .catch(err => {
      dispatch({ type: UPDATE_PICKUP_FAILURE, payload: err });
      console.log("This is err in updatePickup: ", err);
    });
};
