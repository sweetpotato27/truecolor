// src/components/posts/posts.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    UNSAFE_componentWillMount() {
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>There are no Posts</div>)
        } else {
            return (
                <div>
                    <h2>All Posts</h2>
                    {this.state.posts.map(post => (
                        <PostBox key={post._id} description={post.description} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Post);