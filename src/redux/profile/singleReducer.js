import { combineReducers } from "redux";
import profileReducer from "./reducer";
import { reducerBookFuction } from "../reducer";
import { productReducer } from "../products/reducer";
import { cartReducer } from "../cart/reducer";


export const singleReducer=combineReducers(
    {
        profile:profileReducer,
        books:reducerBookFuction,
        products:productReducer,
        cart:cartReducer

    }
)