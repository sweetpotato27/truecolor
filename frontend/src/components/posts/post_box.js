// src/components/posts/post_box.js

import React from 'react';

class PostBox extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <h3>{this.props.user}</h3>
                <img src={this.props.imageUrl} alt=""></img>
            </div>
        );
    }
}

export default PostBox;