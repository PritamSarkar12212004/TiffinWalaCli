import axios from 'axios';

const api = axios.create({
        baseURL: 'http://192.168.50.107:3000',
});
export default api;  