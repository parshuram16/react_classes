import { legacy_createStore } from "redux";
import { reducerBookFuction } from "./reducer";


export const reduxStore=legacy_createStore(reducerBookFuction)


