// src/reducers/errors_reducer.js
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import PostErrorsReducer from './post_errors_reducer';
import ProspectErrorsReducer from './prospect_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    post: PostErrorsReducer,
    prospect: ProspectErrorsReducer
});