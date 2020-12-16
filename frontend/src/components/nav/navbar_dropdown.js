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

    let createLink = (to, label) => {
      return (
        <li className="navbar-dropdown-item"
          key={to}>
          <Link className="hyperlink" to={to}>{label}</Link>
        </li>
      )
    }

    let pubLinks = [
      createLink('/info', 'Information'),
      createLink('/contributors', 'Contributors'),
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
            createLink('/new_post', 'Compose')
            )
          linkList.push(
            createLink('/profile', 'My Feed')
            );
        }
        pubLinks.forEach(link=>{
          linkList.push(link)
        })
        linkList.push(
          <li className="navbar-dropdown-item"
            key="close">
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