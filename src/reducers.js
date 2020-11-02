import { combineReducers } from "redux";
import { AUTHENTICATE } from './actions';

const defaultAccounts = [
    {
        username: 'johnemmanuelb',
        password: '123',
        firstName: 'John Emmanuel',
        lastName: 'Bacalla',
    }
]
const accounts = (state = defaultAccounts, action) => {
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

const defaultAuthentication = {
    authenticated: false,
    account: null
}
const authentication = (state = defaultAuthentication, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { authenticated: true, account: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    accounts,
    authentication
});