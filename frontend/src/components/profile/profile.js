// src/compoents/profile/profile.js

import React from 'react';
import PostBox from '../posts/post_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    UNSAFE_componentWillMount() {
        this.props.fetchUserPosts(this.props.currentUser.id);
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>This user has no Posts</div>)
        } else {
            return (
                <div>
                    <h2>All of this User's Posts</h2>
                    {this.state.posts.map(post => (
                        <PostBox key={post._id} 
                                date={post.date}
                                title={post.title} 
                                description={post.description} 
                                imageUrl={post.imageUrl}/>
                    ))}
                </div>
            );
        }
    }
}

export default Profile;