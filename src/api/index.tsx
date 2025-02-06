import axios from 'axios';

const chatApi = axios.create({
    baseURL: '/api',
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

export default chatApi;
