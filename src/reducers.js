import { combineReducers } from "redux";
import {
    AUTHENTICATE, LOGOUT, SELECTED_PARKINGLOT,
    UPDATE_VIEWPORT, INIT_VIEWPORT, UPDATE_INIT_VIEWPORT,
    RESET_TICKETS
} from './actions';

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

const accounts = (state = [], action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return [...state, action.payload];
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
        case RESET_TICKETS:
            return [];
        default:
            return state;
    }
}
const cars = (state = [], action) => {
    switch (action.type) {
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
            return { authenticated: state.authenticated, account: action.payload };
        case LOGOUT:
            return { authenticated: false, account: null };
        case "ADD_CAR":
            let carList = [...state.account.carList, action.payload];
            return { authenticated: state.authenticated, account: { ...state.account, carList } };
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

const viewport = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_VIEWPORT:
            return action.payload;
        case INIT_VIEWPORT:
            return action.payload;
        default:
            return state;
    }
}

const isInitViewport = (state = true, action) => {
    switch (action.type) {
        case UPDATE_INIT_VIEWPORT:
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
    viewport,
    isInitViewport,
});