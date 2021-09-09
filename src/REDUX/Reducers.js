import { combineReducers } from "redux";
import { SET_SEASON } from "./Constants";



export const seasonReducer=(state='',action)=>{
    switch (action.type) {
        case SET_SEASON:
            return action.payload;
        default:
            return state;
    }
}

export const reducers=combineReducers({
    Season:seasonReducer,
})