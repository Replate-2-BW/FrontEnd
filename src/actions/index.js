import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_PICKUPS_SUCCESS = "FETCH_PICKUP_SUCCESS";
export const FETCH_PICKUPS_START = "FETCH_PICKUP_START";
export const FETCH_PICKUPS_FAILURE = "FETCH_PICKUP_FAILURE";

// This is an async action creator
export const fetchPickups = () => dispatch => {
  dispatch({ type: FETCH_PICKUPS_START });
  axiosWithAuth()
    .get(`/auth/pickup/`)
    .then(res => {
      dispatch({ type: FETCH_PICKUPS_SUCCESS, payload: res.data });
      console.log("This is res in fetchData: ", res);
    })
    .catch(err => {
      dispatch({ type: FETCH_PICKUPS_FAILURE, payload: err });
      console.log("This is err in fetchData: ", err);
    });
};

// This is a sync creator
export const actionName = payload => ({
  type: ACTION_NAME,
  payload: payload
});
