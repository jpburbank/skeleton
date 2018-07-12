import {combineReducers} from "redux";
import someReducer from "./someReducer";

let rootReducer = combineReducers({
    someReducer: someReducer
});

export default rootReducer;