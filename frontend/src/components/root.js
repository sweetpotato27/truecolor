// src/components/root.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// We'll create this soon
import App from './app';

const Root = ({ store } ) => (
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;