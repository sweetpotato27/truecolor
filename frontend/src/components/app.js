// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Switch, Route } from 'react-router-dom';
import Modal from './modal/modal';
import PostContainer from './posts/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormcontainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import PostComposeContainer from './posts/post_compose_container';
import Info from './website-information/info';
import Contributors from './website-information/contributors';

// At this point, we should be thinking about
// our own project and which kinds of routes are
// required for the unique needs of our app.

const App = () => (
    <div className="app">
        <Modal />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/posts" component={PostContainer} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/contributors" component={Contributors} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormcontainer} />

            <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
            {/* <ProtectedRoute exact path="/posts" component={PostContainer} /> */}
        </Switch>
    </div>
);

export default App;
