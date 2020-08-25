// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in 
    getLinks() {
        if(this.props.loggedIn) {
            return (
                <div className="hyperlink-div">
                    <Link className="hyperlink" to={'/posts'}>All Posts</Link>
                    <Link className="hyperlink" to={'/new_post'}>Post Something!</Link>
                    <Link className="hyperlink" to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="hyperlink-div">
                    <Link className="hyperlink" to={'/signup'}>Signup</Link>
                    <Link className="hyperlink" to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>True Color</h1>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;