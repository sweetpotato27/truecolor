// src/util/post_api_util.js

import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/posts')
};

export const getUserPosts = id => {
    return axios.get(`/api/posts/user/${id}`)
};

export const composePost = data => {
    return axios.post('/api/posts/', data)
};