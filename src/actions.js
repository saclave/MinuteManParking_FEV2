export const GET_ACCOUNT_BY_USERNAME_AND_PASSWORD = "GET_ACCOUNT_BY_USERNAME_AND_PASSWORD";
export const AUTHENTICATE = "AUTHENTICATE";

export const getAccount = accounts => {
    return { type: "GET_ACCOUNT", payload: accounts };
}

export const authenticate = (account) => {
    return { type: AUTHENTICATE, payload: account }
}

export const addUser = accounts => {
    return { type: "ADD_ACCOUNT", payload: accounts }
}

export const updateUser = account => {
    return { type: "UPDATE_ACCOUNT", payload: account }
}
export const updateParkinglot = parkinglot => {
    return { type: "UPDATE_PARKING_LOT", payload: parkinglot }
}
export const getParkinglot = parkinglot => {
    return { type: "GET_PARKINGLOT", payload: parkinglot };
}
export const addTicket = ticket => {
    return { type: "ADD_TICKET", payload: ticket }
}
export const getTicket = ticket => {
    return { type: "GET_TICKET", payload: ticket };
}
export const addCar = cars => {
    return { type: "ADD_CAR", payload: cars }
}
