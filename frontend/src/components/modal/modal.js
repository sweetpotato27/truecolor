import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavbarDropdownContainer from '../nav/navbar_dropdown_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) return null;

  let component;
  console.log(modal)
  switch(modal.type) {
    case 'profile':
      component = <NavbarDropdownContainer />;
      break;
    default:
      return null;
  }

  if (modal.type === 'profile') {
    return (
      <div
        className="modal-background"
        onClick={closeModal}
      >
        <div className="profile-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
};

const msp = state => {
  return ({
    modal: state.ui.modal
  });
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(Modal);