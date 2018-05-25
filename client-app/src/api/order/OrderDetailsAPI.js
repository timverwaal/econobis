import axios from 'axios';

const URL_API = process.env.URL_API;
const URL_ORDER = `${URL_API}/api/order`;

export default {
    fetchOrderDetails: function (id) {
        const requestUrl = `${URL_ORDER}/${id}`;
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

    newOrder: (order) => {
        const requestUrl = `${URL_ORDER}`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, order)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    updateOrder: ({order}) => {
        const requestUrl = `${URL_ORDER}/${order.id}`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, order)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    deleteOrder: (id) => {
        const requestUrl = `${URL_ORDER}/${id}/delete`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl)
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    newOrderProduct: (orderProduct) => {
        const requestUrl = `${URL_ORDER}/order-product`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, orderProduct);
    },

    updateOrderProduct: (orderProduct) => {
        const requestUrl = `${URL_ORDER}/order-product/${orderProduct.id}/update`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, orderProduct);
    },

    fetchContactInfoForOrder: function (contactId) {
        const requestUrl = `${URL_ORDER}/${contactId}/contact-info-for-order`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.get(requestUrl)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                    console.log(error);
                }
            );
    },

    downloadPreview: (id) => {
        const requestUrl = `${URL_ORDER}/${id}/download-preview`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.get(requestUrl, {responseType: 'blob'});
    }
};