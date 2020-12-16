// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: true,
            opened:false
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.clickedLink = this.clickedLink.bind(this);
        this.handelOpenModal = this.handleOpenModal.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    clickedLink(e) {
        this.setState({
            newPost: !this.state.newPost
        })
    }

    toggleMenu(){
      this.setState({
        opened: !this.state.opened
      })
    }

    handleOpenModal(type) {
        this.props.openModal(type);
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        let linkList = [];

        let paths = window.location.pathname.split("/").filter(e=>e); //filter empty

        let createLink = (to, label) => {
          return (
            <Link className="hyperlink" key={to} to={to}>{label}</Link>
          )
        }
    
        let pubLinks = [
          createLink('/posts', 'Posts'),
          createLink('/info', 'Information'),
          createLink('/contributors', 'Contributors'),
        ];

        if (paths[0] === "posts"){
          pubLinks.shift();
        }else if (paths[0] === "info") {
            pubLinks.splice(1, 1);
        } else if (paths[0] === "contributors") {
            pubLinks.splice(2, 1);
        }
    
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

        return linkList;
    }

    render() {
        return (
            <div className="navbar">
                <h1><Link className="hyperlink" to={'/'}>True Color</Link></h1>
                <div className={`hyperlink-div ${this.state.opened?'show':''}`}>
                  {this.getLinks()}
                </div>

                <button className="header__navbar_hamburger"
                  onClick={()=>this.toggleMenu()}>
                </button>
            </div>
        );
    }
}

export default NavBar;
