import axios from 'axios';

const API_URL = 'http://example-api-url.com';

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
