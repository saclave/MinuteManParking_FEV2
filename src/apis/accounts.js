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

const getParkingLots = () => {
    return api.get(`/lots`);
}

export {
    addUser, updateUser, getUserByUsernameAndPassword, getAll, getParkingLots
}