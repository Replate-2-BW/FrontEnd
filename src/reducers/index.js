import { combineReducers } from "redux";
import { asyncReducer } from "./asyncReducer";
import { syncReducer } from "./syncReducer";

const rootReducer = combineReducers({
    async: asyncReducer,
    sync: syncReducer
});

export default rootReducer;