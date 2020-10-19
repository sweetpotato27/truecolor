// src/components/posts/posts.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';
import NavBarContainer from '../nav/navbar_container';

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
                    <NavBarContainer />
                    <div className="all-posts">
                        <div className="all-posts-div">
                            {this.state.posts.map(post => (
                                <PostBox key={post._id}
                                        className="post-box"
                                        postId={post._id}
                                        user={post.user}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body}
                                        imageUrl={post.imageUrl}
                                        date={post.date}
                                        history={this.props.history} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Post);
