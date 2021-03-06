// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions"
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});
const mapDispatchToProps = dispatch => ({
    openModal: type => dispatch(openModal(type)),
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);