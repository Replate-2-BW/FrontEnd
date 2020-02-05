import { combineReducers } from "redux";
import { pickupReducer } from "./asyncReducer";
import { syncReducer } from "./syncReducer";

const rootReducer = combineReducers({
    pickupReducer: pickupReducer,
    sync: syncReducer
});

export default rootReducer;