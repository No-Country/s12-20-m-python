import axios from 'axios';

const API_URL = 'https://guardianesdelbosque.onrender.com';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
