import axios from 'axios';
import DemoApi from '../../constants/demo/demoApi';

const api = axios.create({
    baseURL: DemoApi.Backend_Uri,
});
export default api;