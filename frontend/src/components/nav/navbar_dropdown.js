import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logOut();
    this.props.closeModal();
  }


  render() {
    let linkList;
    let href;
    href = window.location.href.split("/");
    href = href.splice(0, 3)
    href = href.join("/");
    if (window.location.href === href + "/#/posts") {
        if(this.props.loggedIn) {
          linkList = 
          <ul className="navbar-dropdown-list"
              onClick={this.props.closeModal}>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/info'}>Information</Link>
            </li>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/contributors'}>Contributors</Link>
            </li>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/new_post'}>Compose</Link>
            </li>
            <li className="navbar-dropdown-item">
              <button className="hyperlink" onClick={this.handleLogout}>Logout</button>
            </li>
          </ul>
        } else {
          linkList = 
          <ul className="navbar-dropdown-list"
              onClick={this.props.closeModal}>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/info'}>Information</Link>
            </li>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/contributors'}>Contributors</Link>
            </li>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/login'}>Login</Link>
            </li>
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/signup'}>Signup</Link>
            </li>
          </ul>
        }
    } else if (window.location.href === href + "/#/info") {
      linkList = 
        <ul className="navbar-dropdown-list"
            onClick={this.props.closeModal}>
          <li className="navbar-dropdown-item">
            <Link className="hyperlink" to={'/posts'}>posts</Link>
          </li>
          <li className="navbar-dropdown-item">
            <Link className="hyperlink" to={'/contributors'}>Contributors</Link>
          </li>
        </ul>
    } else if (window.location.href === href + "/#/contributors") {
      linkList = 
        <ul className="navbar-dropdown-list"
            onClick={this.props.closeModal}>
          <li className="navbar-dropdown-item">
            <Link className="hyperlink" to={'/posts'}>posts</Link>
          </li>
          <li className="navbar-dropdown-item">
            <Link className="hyperlink" to={'/info'}>Information</Link>
          </li>
        </ul>
    } else {
        linkList = <div>poop</div>
    }

    
    return (
      <div className="navbar-dropdown-container">
        {linkList}
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);