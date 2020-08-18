// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file
// since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';


export const RECIEVE_USER_LOGOUT = "RECIEVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECIEVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // dispatch a logout action
    dispatch(logoutUser())
};