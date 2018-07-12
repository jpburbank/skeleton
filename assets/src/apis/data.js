

export const getInitialData = () => {
    // let url = SERVER + ENDPOINTS.METADATA;
    // let init = {
    //     headers: new Headers({
    //         "Content-Type": "application/json",
    //         "Authorization": `JWT ${token}`
    //     })
    // };
    // return fetch(url, init).then(response => {
    //     if (!response.ok || SUCESS_CODES.indexOf(response.status) === -1) {
    //         throw Error(response.status);
    //     }
    //     return response.json();
    // });
    return Promise.resolve(99);
};