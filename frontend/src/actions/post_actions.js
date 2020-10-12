// src/actions/post_actions.js

import { getPosts, getUserPosts, writePost } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = (errors) => {
    // console.log(errors)
    return ({
        type: RECEIVE_POST_ERRORS,
        errors: errors.text
    })
};

export const receiveUserPosts = posts => ({
    type: RECEIVE_USER_POSTS,
    posts
});

export const receiveNewPost = post => ({
    type: RECEIVE_NEW_POST,
    post
});

export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch(receivePosts(posts)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const fetchUserPosts = id => dispatch => (
    getUserPosts(id)
        .then(posts => dispatch(receiveUserPosts(posts)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const composePost = data => dispatch => {
    // console.log("here");
    return (
        writePost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => {
            // console.log(err.response.data)
            dispatch(receiveErrors(err.response.data))
        })
    );
}
