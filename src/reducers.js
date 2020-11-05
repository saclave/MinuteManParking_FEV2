import { combineReducers } from "redux";
import { AUTHENTICATE, LOGOUT, SELECTED_PARKINGLOT, UPDATE_VIEW_PORT, INIT_VIEW_PORT } from './actions';

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
        // case "UPDATE_ACCOUNT":
        //     return action.payload;
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
        case "GET_PARKINGLOT_ID":
            return action.payload;
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

const tickets = (state = [], action) => {
    switch (action.type) {
        case "ADD_TICKET":
            return [...state, action.payload];
        case "GET_TICKET":
            return action.payload;
        default:
            return state;
    }
}
const cars = (state = [], action) => {
    switch (action.type) {
        // case "ADD_CAR":
        //     return [...state, action.payload];
        default:
            return state;
    }
}

const defaultAuthentication = {
    authenticated: false,
    account: null
}
const defaultSelectedParking = {
    selectedParking: false,
    parkinglot: null
}

const authentication = (state = defaultAuthentication, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { authenticated: true, account: action.payload };
        case "UPDATE_AUTH_ACCOUNT":
            return { authenticated: state.authenticated, account : action.payload } ;
        case LOGOUT:
            return { authenticated: false, account: null };
        case "ADD_CAR":
            let carList = [...state.account.carList, action.payload];
            return { authenticated: state.authenticated, account: {...state.account, carList }};
        case "UPDATE_ACCOUNT":
            return { authenticated: state.authenticated, account: action.payload };
        default:
            return state;
    }
}
const selectedParkingLot = (state = defaultSelectedParking, action) => {
    switch (action.type) {
        case SELECTED_PARKINGLOT:
            return { selectedParking: true, parkinglot: action.payload };
        default:
            return state;
    }
}

const viewPort = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_VIEW_PORT:
            return action.payload;
        case INIT_VIEW_PORT: 
            return action.payload;
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
    selectedParkingLot,
    hazards,
    viewPort
});