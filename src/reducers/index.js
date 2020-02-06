import { combineReducers } from "redux";
import { pickupReducer, createReducer, updateReducer, deleteReducer } from "./asyncReducer";

const rootReducer = combineReducers({
  pickupReducer: pickupReducer,
  createReducer: createReducer,
  updateReducer: updateReducer,
  deleteReducer: deleteReducer,
});

export default rootReducer;
