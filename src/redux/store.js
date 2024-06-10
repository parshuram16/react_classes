

import { legacy_createStore } from "redux";
import { singleReducer } from "./profile/singleReducer";


export const reduxStore=legacy_createStore(singleReducer)



