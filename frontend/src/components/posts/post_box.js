// src/components/posts/post_box.js

import React from 'react';

class PostBox extends React.Component {
    render() {
        return (
            <div className="post-box-div">

                <h3 class="user">{this.props.user ? this.props.user : ""}</h3>
                <h3 class="date">{this.props.date ? this.props.date.split("T")[0] : ""}</h3>
                <h3>{this.props.user ? this.props.user : ""}</h3>
                <h3>{this.props.date ? this.props.date.split("T")[0] : ""}</h3>
                {/* should we have similar logic for the image tag? */}
                {/* might make sense to have a simple logo as placeholder for unloadable imageUrls */}
                <img className="image" src={this.props.imageUrl} alt=""></img>
                <h2>{this.props.title ? this.props.title : ""}</h2>
                <p>{this.props.body ? this.props.body : ""}</p>
                <hr></hr>
            </div>
        );
    }
}

export default PostBox;
