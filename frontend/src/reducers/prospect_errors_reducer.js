// src/reducers/prospect_errors_reducer.js;

import {
  RECEIVE_PROSPECT_ERRORS
} from "../actions/prospect_actions";

const _nullErrors = [];

const ProspectErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROSPECT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ProspectErrorsReducer;
