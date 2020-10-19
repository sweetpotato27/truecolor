// src/actions/post_actions.js

import { getUser } from '../util/user_api_util';
import { getUserPosts } from '../util/post_api_util';


export const RECEIVE_USER = "RECEIVE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_USER_ERRORS = "RECEIVE_NEW_POST";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = (errors) => {

    return ({
        type: RECEIVE_POST_ERRORS,
        errors: errors.text
    })
};


export const receiveUserPosts = posts => ({
    type: RECEIVE_USER_POSTS,
    posts
});

export const fetchUser = id => dispatch => {
    return getUser(id)
            .then(user => dispatch(receiveUser(user)));
}

export const fetchUserPosts = id => dispatch => (
    getUserPosts(id)
        .then(posts => dispatch(receiveUserPosts(posts)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

