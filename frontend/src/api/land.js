import axios from './axios';
import axiostest from 'axios';

export const getLand = async () => axios.get(`/land/land`);
export const getJson = async () => axiostest.get(`/api/data.json`);
