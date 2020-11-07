import axios from 'axios';
const api = axios.create({
    baseURL: '/api'
});

export const register = async (newUser) => {
    const res = await api.post('/register', newUser);
    return res.data;
}

export const login = async (userDetails) => {
    const res = await api.post('/login', userDetails);
    return res.data;
}