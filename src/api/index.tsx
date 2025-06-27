import axios from 'axios';

const chatApi = axios.create({
    baseURL: '/api'
});

export default chatApi;
