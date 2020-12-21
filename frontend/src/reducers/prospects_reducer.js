// src/reducers/prospects_reducer.js

import { RECEIVE_PROSPECT } from '../actions/prospect_actions';

const ProspectsReducer = (state = { prospect: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_PROSPECT:
            newState.prospect = action.prospect.data;
            return newState;
        default:
            return state;
    }
};

export default ProspectsReducer;