// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormcontainer from './session/signup_form_container';

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