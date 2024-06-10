import { combineReducers } from "redux";
import profileReducer from "./reducer";
import { reducerBookFuction } from "../reducer";
import { productReducer } from "../products/reducer";


export const singleReducer=combineReducers(
    {
        profile:profileReducer,
        books:reducerBookFuction,
        products:productReducer

    }
)