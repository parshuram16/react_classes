

import { applyMiddleware, legacy_createStore } from "redux";
import { singleReducer } from "./profile/singleReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


export const reduxStore=legacy_createStore(
    singleReducer,
    composeWithDevTools(applyMiddleware(thunk))
);







