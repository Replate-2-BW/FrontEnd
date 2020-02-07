import { combineReducers } from "redux";
import { pickupReducer, createReducer, updateReducer, deleteReducer } from "./pickupReducers";
import { fetchProfileReducer } from "./profileReducers";

const rootReducer = combineReducers({
  pickupReducer: pickupReducer,
  createReducer: createReducer,
  updateReducer: updateReducer,
  deleteReducer: deleteReducer,
  fetchProfileReducer: fetchProfileReducer
});

export default rootReducer;
