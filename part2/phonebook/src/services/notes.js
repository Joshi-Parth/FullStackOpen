import axios from "axios";

const baseURL = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseURL)
}

const addPerson = (obj) => {
    return axios.post(baseURL, obj)
}

const removePerson = id => {
    return axios.delete(`${baseURL}/${id}`)
}

const updateNumber = (id, obj) => {
    return axios.put(`${baseURL}/${id}`, obj)
}


export default {getAll, addPerson, removePerson, updateNumber}