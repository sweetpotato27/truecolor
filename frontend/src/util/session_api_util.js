// frontend/src/util/session_api_util.js

import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// We can pass in a falsey value to our function to ensure 
// that the token will be removed from memory once our user is logged out 
// or when the token has expired.