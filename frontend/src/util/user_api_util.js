// src/util/post_api_util.js

import axios from 'axios';

export const getUser = id => {
    return axios.get(`/api/users/${id}`)
};
