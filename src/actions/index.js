import axios from "axios";
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

// This is an async action creator
export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_TOGGLE });
    axios.get('https://replate-2.herokuapp.com/')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res }))
        .catch(err => {
            console.log("You failed in fetchData, here's why: ", err)
            dispatch({ type: FETCH_TOGGLE, payload: err })
        })
};

// This is a sync creator
export const actionName = payload => ({
    type: ACTION_NAME,
    payload: payload
})