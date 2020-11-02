import { combineReducers } from "redux";

const accounts = (state = [], action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return [...state, action.payload];
        case "UPDATE_ACCOUNT":
            return action.payload;
        case "GET_ACCOUNT":
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    accounts
});