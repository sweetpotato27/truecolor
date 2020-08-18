// src/components/nav/navbar_container.js

import { connect } from 'react-redex';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);