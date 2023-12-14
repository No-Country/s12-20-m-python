import axios from './axios';

export const registerUser = async (user) =>
  axios.post(`/user/usercreate/`, user);

export const loginUser = async (user) => axios.post(`/user/login/login/`, user);
