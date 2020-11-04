import { combineReducers } from "redux";
import { AUTHENTICATE, LOGOUT } from './actions';

const defaultAccounts = [
    {
        username: 'johnemmanuelb',
        password: '123',
        firstName: 'John Emmanuel',
        lastName: 'Bacalla',
        age: '24',
        email: 'hello@hi.com',
        cash: '50'
    }
]
const defaultParkingLot = [
    {
        id: '01111',
        name: 'moa parking',
        address: 'adasdasda',
        availability: '10',
        capacity: '20',
        price: '10',
        longitude: 120.9835,
        latitude: 14.5371,
    }
]

const defaultHazard = [
    {
        id: '01111',
        type: 'TRAFFIC',
        longitude: 120.9880,
        latitude: 14.5329,
        address: 'PASAY',
    }
]

const defaultTicket = [{
    slot: 'S1234SDF',
    time: '',
    date: '',
}
]
const defaultCar = [{
    platenumber: 'WTP231',
    brand: 'Honda',
    color: 'Red',
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
const parkinglots = (state = defaultParkingLot, action) => {
    switch (action.type) {
        case "ADD_PARKING_LOT":
            return action.payload;
        case "UPDATE_PARKING_LOT":
            return [...state, action.payload];
        case "INIT_PARKINGLOT":
            return action.payload;
        // case "GET_PARKINGLOT":
        //     return action.payload;
        default:
            return state;
    }
}

const hazards = (state = defaultHazard, action) => {
    switch (action.type) {
        case "INIT_HAZARD":
            return action.payload;
        default:
            return state;
    }
}

const tickets = (state = defaultTicket, action) => {
    switch (action.type) {
        case "ADD_TICKET":
            return [...state, action.payload];
        case "GET_TICKET":
            return action.payload;
        default:
            return state;
    }
}
const cars = (state = defaultCar, action) => {
    switch (action.type) {
        case "ADD_CAR":
            return [...state, action.payload];
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
        case LOGOUT:
            return { authenticated: false, account: null };
        default:
            return state;
    }
}
export default combineReducers({
    accounts,
    authentication,
    parkinglots,
    tickets,
    cars,
    hazards
});