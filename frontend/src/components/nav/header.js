import React from 'react';
import NavbarContainer from './navbar_container';

const Header = (props) => {
  let { type, pathname } = props;

  return (
    <header className={`header__container ${type}`}>
      {/* Modal */}
      {/* NavBar (conditional rendering based on logged in/logged out) */}
      <NavbarContainer pathname={pathname} />
    </header>
  );
};

export default Header;