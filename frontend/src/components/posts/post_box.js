// src/components/posts/post_box.js

import React from 'react';

class PostBox extends React.Component {
    render() {
        return (
            <div className="post-box-div">
                <h3>{this.props.user}</h3>                
                <img className="image" src={this.props.imageUrl} alt=""></img>
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <hr></hr>
            </div>
        );
    }
}

export default PostBox;