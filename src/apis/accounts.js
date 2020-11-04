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

const getHazardZones = () => {
    return api.get(`/hazards`);
}

export {
    addUser, updateUser, getUserByUsernameAndPassword, getAll, getParkingLots, addCar, getHazardZones
}