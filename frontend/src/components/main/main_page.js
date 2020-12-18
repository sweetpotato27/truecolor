// src/components/main/main_page.js

import React from 'react';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.pressed = [];
        this.secretCode = 'truecolor'; 
    }

    componentDidMount(props) {
        window.addEventListener('keyup', (e) => {
            this.pressed.push(e.key);
            this.pressed.splice(-this.secretCode.length - 1, this.pressed.length - this.secretCode.length);
            if (this.pressed.join('').includes(this.secretCode)) {
                let href;
                href = window.location.href.split("/");
                href = href.splice(0, 3)
                href = href.join("/");
                window.location.href = href + "/#/login";
            }
        })
    }

    render() {
        return (
            <div className="main">
            </div>
        );
    }
}

export default MainPage;