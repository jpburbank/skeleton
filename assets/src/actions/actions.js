import actionTypes from "constants/action_types";

export const saveValue = (input) => {
    return {
        type: actionTypes.SAVE_VALUE,
        value: input
    };
};