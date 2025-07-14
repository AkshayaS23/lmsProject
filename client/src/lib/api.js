import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lmsproject-jjac.onrender.com', 
  withCredentials: true, 
});

export default api;
