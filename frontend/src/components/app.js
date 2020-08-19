// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import PostContainer from './post/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormcontainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import PostComposeContainer from './posts/post_compose_container';

// At this point, we should be thinking about 
// our own project and which kinds of routes are 
// required for the unique needs of our app.

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormcontainer} />

            <ProtectedRoute exact path="/posts" component={PostContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
        </Switch>
    </div>
);

export default App;