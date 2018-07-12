import {actionTypes} from "constants/action_types";
import {getInitialData} from "apis/data";

export const saveValue = (input) => {
    return {
        type: actionTypes.SAVE_VALUE,
        value: input
    };
};

// This may call an asyc api for initial data load
// Calls should be in there own
export const potentialInitialAsyncGet = () => {
    return function(dispatch, getState) {
        return getInitialData().then((data) => {
            dispatch({
                type: actionTypes.LOAD_SUCCESS, 
                value: data
            });
        }).catch((error) =>  {
            console.log(error);
        });
    };
};