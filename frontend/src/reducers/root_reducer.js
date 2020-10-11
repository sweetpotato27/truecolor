// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import posts from './posts_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    posts,
    ui
});

export default RootReducer;