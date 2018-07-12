const naiveDeepCopy = (value) => {
    return JSON.parse(JSON.stringify(value));
};
export const deepCopy = naiveDeepCopy;