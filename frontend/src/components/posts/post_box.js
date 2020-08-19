// src/components/posts/post_box.js

import React from 'react';

class PostBox extends React.Component {
    render() {
        console.log(this.props.user);
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default PostBox;