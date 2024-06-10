

import { legacy_createStore } from "redux";
import { singleReducer } from "./profile/singleReducer";
import { composeWithDevTools } from "redux-devtools-extension";


export const reduxStore=legacy_createStore(singleReducer,composeWithDevTools())







