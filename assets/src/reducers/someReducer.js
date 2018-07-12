import actionTypes from "constants/action_types";
import {deepCopy} from "utils/copy";


let changeValue = (previousState, value) => {
    let newState = deepCopy(previousState);
    newState.value = value;
    return newState;
};

let initialState = {
    value: undefined
};

let someReducer = (previousState = initialState, action) => {
    switch(action.type) {
        case (actionTypes.SAVE_VALUE):
            return changeValue(action.value);
        default:
            return previousState;
    }
};

export default someReducer;