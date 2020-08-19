// src/reducers/posts_reducer.js

import { RECEIVE_POSTS, RECEIVE_USER_POSTS, RECEIVE_NEW_POST } from '../actions/post_actions';

const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_POSTS:
            newState.all = action.tweets.data;
            return newState;
        case RECEIVE_USER_POSTS:
            newState.user = action.tweets.data;
            return newState;
        case RECEIVE_NEW_POST:
            newState.new = action.tweet.data;
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;