import axios from 'axios';
import DemoApi from '../../constants/demo/demoApi';

const api = axios.create({
    baseURL: DemoApi.LocalHost,
});
export default api;