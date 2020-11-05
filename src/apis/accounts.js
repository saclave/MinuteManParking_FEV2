import api from './api'


const addUser = (account) => {
    return api.post("/users", account);
}

const updateUser = (id, account) => {
    return api.put(`/users/${id}`, account);
}

const getUserByUsernameAndPassword = (username, password) => {
    return api.get(`/users?username=${username}&password=${password}`);
}

const getAll = () => {
    return api.get(`/users`);
}

const addCar = (car) => {
    return api.post("/cars", car);
}

const getParkingLots = () => {
    return api.get(`/lots`);
}

const getParkingLotById = (id) => {
    return api.get(`/lots/${id}`);
}

const getHazardZones = () => {
    return api.get(`/hazards`);
}

const getTicketsByUserId = (id) => {
    return api.get(`/users/${id}/ticketList`);
}

const addTicket = (ticket) => {
    return api.post('/tickets', ticket);
}

const updateAvailability = (id, availability, name) => {
    return api.put(`/slots/${id}`, { availability: !availability, name});
}

export {
    addUser,
    updateUser,
    getUserByUsernameAndPassword,
    getAll,
    getParkingLots,
    addCar,
    getTicketsByUserId,
    getParkingLotById,
    getHazardZones,
    addTicket,
    updateAvailability,
}