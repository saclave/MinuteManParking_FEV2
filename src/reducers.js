import { combineReducers } from "redux";

const accounts = (state = [], action) => {
    switch (action.type) {
        case "GET_ACCOUNT":
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    accounts
});