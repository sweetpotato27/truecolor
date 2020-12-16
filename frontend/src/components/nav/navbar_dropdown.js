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
    let paths = window.location.pathname.split("/").filter(e=>e); //filter empty
    let pubLinks = [
      <li className="navbar-dropdown-item">
        <Link className="hyperlink" to={'/info'}>Information</Link>
      </li>,
      <li className="navbar-dropdown-item">
        <Link className="hyperlink" to={'/contributors'}>Contributors</Link>
      </li>
    ];

    if (paths[0] === "info") {
        pubLinks.splice(0, 1);
    } else if (paths[0] === "contributors") {
        pubLinks.splice(1, 1);
    }

    let linkList = [];
    if (this.props.loggedIn) {
        if(paths[0] === 'posts') {
          linkList.push(
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/new_post'}>Compose</Link>
            </li>
            );
          linkList.push(
            <li className="navbar-dropdown-item">
              <Link className="hyperlink" to={'/profile'}>My Feed</Link>
            </li>
            );
        }
        pubLinks.forEach(link=>{
          linkList.push(link)
        })
        linkList.push(
          <li className="navbar-dropdown-item">
            <button className="hyperlink" onClick={this.handleLogout}>Logout</button>
          </li>
          );
    } else{
        linkList = pubLinks
    }

    let ul = 
    <ul className="navbar-dropdown-list"
    onClick={this.props.closeModal}>
      {linkList}
    </ul>
    
    return (
      <div className="navbar-dropdown-container">
        {ul}
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);