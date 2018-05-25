import axios from 'axios';

const URL_API = process.env.URL_API;
const URL_ADMINISTRATION = `${URL_API}/api/administration`;

export default {
    fetchAdministrations: () => {
        const requestUrl = `${URL_ADMINISTRATION}/grid`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.get(requestUrl);
    },

    peekAdministrations: () => {
        const requestUrl = `${URL_ADMINISTRATION}/peek`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.get(requestUrl)
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                    console.log(error);
                }
            );
    },
};