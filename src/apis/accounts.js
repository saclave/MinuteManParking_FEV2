import api from './api'


const addUser = (account) => {
    return api.post("/users", {user:account});
}

const updateUser = (id, account) => {
    return api.put("/users/" + id, {user:account});
}

export {
    addUser, updateUser
}