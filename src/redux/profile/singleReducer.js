import { combineReducers } from "redux";
import profileReducer from "./reducer";
import { reducerBookFuction } from "../reducer";


export const singleReducer=combineReducers(
    {
        profile:profileReducer,
        books:reducerBookFuction

    }
)