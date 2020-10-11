// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: true
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

    handleOpenModal(type) {
        this.props.openModal(type);
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        let navIcon;
        let href;
        href = window.location.href.split("/");
        href = href.splice(0, 3)
        href = href.join("/");
        if (window.location.href === href + "/#/") {
            navIcon = <Link className="hyperlink" to={`/posts`}>posts</Link>
        } else {
            navIcon = <button className="header__navbar-profile"
                            onClick={() => this.handleOpenModal("profile")}>
                        </button>
        }        
        return (
            <div className="hyperlink-div">
                {navIcon}
                {/* <Link className="hyperlink" to={'/feed'}>Feed</Link>
                <Link className="hyperlink" to={'/info'}>Info</Link>
                <Link className="hyperlink" to={'/contributors'}>Contributors</Link> */}
            </div>
        );
    }

    render() {
        return (
            <div className="navbar">
                <h1><Link className="hyperlink" to={'/'}>True Color</Link></h1>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;
