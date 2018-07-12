import {combineReducers} from "redux";
import someValues from "./some_values";

let rootReducer = combineReducers({
    someValues: someValues
});

export default rootReducer;