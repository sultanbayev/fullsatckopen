import axios from "axios";
const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then(response => response.data);
}

const create = (personObject) => {
    const request = axios.post(BASE_URL, personObject);
    return request.then(response => response.data);
}

const update = (id, personObject) => {
    const url = `${BASE_URL}/${id}`;
    const request = axios.put(url, personObject);
    return request.then(response => response.data);
}

const deleteOne = (id) => {
    const url = `${BASE_URL}/${id}`;
    const request = axios.delete(url);
    return request.then(response => response.data);
}

const personService = { getAll, create, update, deleteOne };
export default personService;