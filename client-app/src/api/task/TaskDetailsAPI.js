import axios from 'axios';

const URL_API = process.env.URL_API;
const URL_TASK = `${URL_API}/api/task`;

export default {
    fetchTaskDetails: (id) => {
        const requestUrl = `${URL_TASK}/${id}`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.get(requestUrl);
    },

    newTask: (task) => {
        const requestUrl = URL_TASK;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, task);
    },

    updateTask: (task) => {
        const requestUrl = `${URL_TASK}/${task.id}`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, task);
    },

    deleteTask: (id) => {
        const requestUrl = `${URL_API}/api/task/${id}/delete`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl);
    },
};