// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';
import firebase from '../firebase';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            newPost: ''
        };

        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ description: nextProps.newPost.description });
    }

    handleSubmit(e) {
        e.preventDefault();
        //Get file
        let file = this.fileInput.current.files[0];
        // Create a storage ref
        let storageRef = firebase.storage().ref('images/' + file.name);
        // Upload file
        let task = storageRef.put(file);
        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
        );
        let post =  {
            description: this.state.description
        };

        this.props.composePost(post);
        this.setState({ description: '' })
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="textarea"
                                id="desc"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Image Description..."
                            />
                        </div>
                        <div>
                            <input type="file" ref={this.fileInput} />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <br />
                <PostBox text={this.state.newPost} />
            </div>
        )
    }
}

export default PostCompose;
