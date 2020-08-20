// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newPost: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newPost: nextProps.newPost.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text
        };
        console.log("handleSubmit");
        this.props.composePost(post);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your post..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <PostBox text={this.state.newPost} />
            </div>
        )
    }
}

export default PostCompose;