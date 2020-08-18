// src/components/app.js

import React from 'react';
import { AuthRoute } from '../util/routes_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormcontainer from './session/signup_form_container';

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
        </Switch>
    </div>
);

export default App;