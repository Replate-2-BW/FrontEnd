import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_PICKUPS_START = "FETCH_PICKUP_START";
export const FETCH_PICKUPS_SUCCESS = "FETCH_PICKUP_SUCCESS";
export const FETCH_PICKUPS_FAILURE = "FETCH_PICKUP_FAILURE";

export const POST_PICKUP_START = "POST_PICKUP_START";
export const POST_PICKUP_SUCCESS = "POST_PICKUP_SUCCESS";
export const POST_PICKUP_FAILURE = "POST_PICKUP_FAILURE";

export const UPDATE_PICKUP_START = "UPDATE_PICKUP_START";
export const UPDATE_PICKUP_SUCCESS = "UPDATE_PICKUP_SUCCESS";
export const UPDATE_PICKUP_FAILURE = "UPDATE_PICKUP_FAILURE";

export const DELETE_PICKUP_START = "DELETE_PICKUP_START";
export const DELETE_PICKUP_SUCCESS = "DELETE_PICKUP_SUCCESS";
export const DELETE_PICKUP_FAILURE = "DELETE_PICKUP_FAILURE";

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

export const createPickup = pickup => dispatch => {
  dispatch({ type: POST_PICKUP_START });
  axiosWithAuth()
    .post(`auth/pickup/add`, pickup)
    .then(res => {
      dispatch({ type: POST_PICKUP_SUCCESS, payload: res.data });
      console.log("This is res in createPickup: ", res);
    })
    .catch(err => {
      dispatch({ type: POST_PICKUP_FAILURE, payload: err });
      console.log("This is err in createPickup: ", err);
    });
};

export const updatePickup = (id, updatedPickup) => dispatch => {
  dispatch({ type: UPDATE_PICKUP_START });
  axiosWithAuth()
    .put(`/auth/pickup/${id}`, updatedPickup)
    .then(res => {
      dispatch({ type: UPDATE_PICKUP_SUCCESS, payload: res.data });
      console.log("This is res in updatePickup: ", res);
    })
    .catch(err => {
      dispatch({ type: UPDATE_PICKUP_FAILURE, payload: err });
      console.log("This is err in updatePickup: ", err);
    });
};

export const deletePickup = (id) => dispatch => {
  dispatch({ type: DELETE_PICKUP_START });
  // console.log("This is id in deletePickup action creator: ", id)
  axiosWithAuth()
    .delete(`/auth/pickup/${id}/del`)
    .then(res => {
      dispatch({ type: DELETE_PICKUP_SUCCESS, payload: res.data });
      console.log("This is res in deletePickup: ", res);
    })
    .catch(err => {
      dispatch({ type: DELETE_PICKUP_FAILURE, payload: err });
      console.log("This is err in deletePickup: ", err);
    });
};
