import axios from './axios';

export const registerUser = async (user) => axios.post(`/auth/register`, user);

export const loginUser = async (user) => axios.post(`/auth/login`, user);
