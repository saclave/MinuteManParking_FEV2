export const GET_ACCOUNT_BY_USERNAME_AND_PASSWORD = "GET_ACCOUNT_BY_USERNAME_AND_PASSWORD";
export const AUTHENTICATE = "AUTHENTICATE";
export const SELECTED_PARKINGLOT = "SELECTED_PARKINGLOT";

export const getAccount = accounts => {
    return { type: "GET_ACCOUNT", payload: accounts };
}

export const authenticate = (account) => {
    return { type: AUTHENTICATE, payload: account }
}
export const selectedParkingLot = (parkinglot) => {
    return { type: SELECTED_PARKINGLOT, payload: parkinglot }
}

export const addUser = accounts => {
    return { type: "ADD_ACCOUNT", payload: accounts }
}

export const updateUser = account => {
    return { type: "UPDATE_ACCOUNT", payload: account }
}

export const addParkinglot = parkinglot => {
    return { type: "ADD_PARKING_LOT", payload: parkinglot }
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

export const getParkingLotById = (id) => {
    return{ type: "GET_PARKINGLOT_ID", payload: id}
}

export const initParkinglots = parkinglots => {
    return{ type: "INIT_PARKINGLOT", payload: parkinglots}
}

