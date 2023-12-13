import axios from './axios';

export const getLand = async () => axios.get(`/land`);
