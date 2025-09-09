import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tiffin-wala-backend-orpin.vercel.app',
});
export default api;