// frontend/src/util/session_api_util.js

import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

// We can pass in a falsey value to our function to ensure 
// that the token will be removed from memory once our user is logged out 
// or when the token has expired.

// You might be thinking that keeping these axios requests in their own utility 
// file is a bit useless. In fact, many developers do handle their API calls 
// within the action itself. We followed this convention since it is similar to 
// the format you are already familiar with.