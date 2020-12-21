import axios from 'axios';

export const getProspect = email => {
    return axios.get(`/api/prospects/prospect/${email}`)
};

export const documentProspect = data => {
    return axios.post('/api/prospects/', data)
};

