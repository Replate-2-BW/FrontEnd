import { combineReducers } from "redux";
import { pickupReducer, updateReducer } from "./asyncReducer";
import { syncReducer } from "./syncReducer";

const rootReducer = combineReducers({
    pickupReducer: pickupReducer,
    updateReducer: updateReducer,
    sync: syncReducer
});

export default rootReducer;