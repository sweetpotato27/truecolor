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

        // Upload file and save
        storageRef.put(file);

        // The following adds html img element to html document
        // it pulls the image from firebase
        storageRef.getDownloadURL().then(function(url) {

            let img = document.createElement('img');
            img.src = url;
            // Insert url into an <img> tag to "download"
            document.getElementById("image-div").appendChild(img);

            // we can save url to our database here!
            // we should probably save the title and description and other attributes 
            // of a new post here as well.
            // That way they are only saved to db if an image is successfully uploaded to firebase.

        }).catch(function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storgage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect te server reponse
                    break;
                default:
                    break;
            }
        });

        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
        );

        // might move this ...
        let post =  {
            description: this.state.description
        };

        this.props.composePost(post);
        this.setState({ description: '' })
        // ...
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
                <div id="image-div">

                </div>
                <br />
                <PostBox text={this.state.newPost} />
            </div>
        )
    }
}

export default PostCompose;
