import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "components/containers/app";
import rootReducer from "reducers/root_reducer";
import {potentialInitialAsyncGet} from "actions/actions";


// let emptyState = {
//     someValues: {
//         value: 0
//     }
// };
const store = createStore(rootReducer, {}/*emptyState*/, applyMiddleware(thunk));

store
    .dispatch(potentialInitialAsyncGet())
    .then(() => {
        render((
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        ), document.getElementById("app"));
    });