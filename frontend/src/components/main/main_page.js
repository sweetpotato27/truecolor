// src/components/main/main_page.js

import React from 'react';
import Header from '../nav/header';

class MainPage extends React.Component {

    // componentDidMount(props) {
    //     document.addEventListener()
    // }

    render() {
        return (
            <div className="main">
                <Header type={"header__landing"}/>
            </div>
        );
    }
}

export default MainPage;