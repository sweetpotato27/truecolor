// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import FooterContainer from './footer/footer';

import PostContainer from './posts/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormcontainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import PostComposeContainer from './posts/post_compose_container';
import infoContainer from './website-information/info';

// At this point, we should be thinking about 
// our own project and which kinds of routes are 
// required for the unique needs of our app.

const App = () => (
    <div className="app">
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormcontainer} />

            <ProtectedRoute exact path="/posts" component={PostContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
            <ProtectedRoute exact path="/info" component={infoContainer} />
        </Switch>
        <FooterContainer />
    </div>
);

export default App;