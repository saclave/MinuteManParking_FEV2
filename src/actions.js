export const GET_ACCOUNT_BY_USERNAME_AND_PASSWORD = "GET_ACCOUNT_BY_USERNAME_AND_PASSWORD";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SELECTED_PARKINGLOT = "SELECTED_PARKINGLOT";
export const UPDATE_VIEW_PORT = "UPDATE_VIEW_PORT";
export const INIT_VIEW_PORT = "INIT_VIEW_PORT"

export const getAccount = accounts => {
    return { type: "GET_ACCOUNT", payload: accounts };
}

export const authenticate = (account) => {
    return { type: AUTHENTICATE, payload: account }
}

export const logout = () => {
    return { type: LOGOUT }
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

export const initHazards = hazards => {
    return{ type: "INIT_HAZARD", payload: hazards}
}

export const updateViewPort = viewPort => {
    return { type: UPDATE_VIEW_PORT, payload: viewPort }
}

export const initViewPort = () => {
    return { type: INIT_VIEW_PORT, payload: { latitude: 14.5371, longitude: 120.9835, zoom: 18 } }
}