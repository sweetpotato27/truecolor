// src/reducers/posts_reducer.js

import { RECEIVE_USER, RECEIVE_USER_POSTS } from '../actions/user_actions';

const UsersReducer = (state = { all: {}, user: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_USER:
            // DO SOMETHING HERE
            return newState;
        case RECEIVE_USER_POSTS:
            newState.user.posts = action.posts.data;
            return newState;
        default:
            return state;
    }
};

export default UsersReducer;