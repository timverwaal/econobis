import axios from 'axios';

const URL_CONTACT_PORTAL_USER = `${URL_API}/api/contact-portal-user`;

export default {
    updatePortalUser: portalUser => {
        const requestUrl = `${URL_CONTACT_PORTAL_USER}/${portalUser.id}`;
        const AUTH_TOKEN = 'Bearer ' + localStorage.getItem('access_token');
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        return axios.post(requestUrl, portalUser);
    },
};
