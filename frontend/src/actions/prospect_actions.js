// src/actions/prospect_actions.js

import { getProspect, documentProspect } from '../util/prospect_api_util';

export const RECEIVE_PROSPECT = "RECEIVE_PROSPECT";
export const RECEIVE_PROSPECT_ERRORS = "RECEIVE_PROSPECT_ERRORS";
export const RECEIVE_NEW_PROSPECT = "RECEIVE_NEW_PROSPECT";


// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = (errors) => {

    return ({
        type: RECEIVE_PROSPECT_ERRORS,
        errors: errors.text
    })
};

export const receiveProspect = prospect => ({
    type: RECEIVE_PROSPECT,
    prospect: prospect
});

export const receiveNewProspect = prospect => ({
    type: RECEIVE_NEW_PROSPECT,
    prospect
});


export const fetchProspect = email => dispatch => {
    return getProspect(email)
            .then(prospect => dispatch(receiveProspect(prospect)));
}


export const recordProspect = data => dispatch => {
    return (
        documentProspect(data)
        .then(prospect => dispatch(receiveNewProspect(prospect)))
        .catch(err => {
            dispatch(receiveErrors(err.response.data))
        })
    );
}
