import { connect } from 'react-redux';
import NavbarDropdown from './navbar_dropdown';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        loggedIn: state.session.isAuthenticated
    });
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDropdown);