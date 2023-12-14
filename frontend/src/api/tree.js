import axios from './axios';


export const getTreeType  = async () => axios.get(`/land/tree-type`);
