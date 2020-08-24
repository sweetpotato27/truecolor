// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';
import firebase from '../firebase';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            imageUrl: '',
            newPost: ''
        };

        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ description: nextProps.newPost.description });
    }

    handleSubmit(e) {
        let that = this;
        e.preventDefault();
        //Get file
        let file = this.fileInput.current.files[0];

        // Create a storage ref
        let storageRef = firebase.storage().ref('images/' + file.name);

        // Upload file and save
        let task = storageRef.put(file);

        // The following adds html img element to html document
        // it pulls the image from firebase
        task.on('state_changed',
          function progress(snapshot) {
          },

          function error(err) {
          },
          function complete() {
              storageRef.getDownloadURL().then(function(url) {
    
                  // we can save url to our database here!
                  // we should probably save the title and description and other attributes 
                  // of a new post here as well.
                  // That way they are only saved to db if an image is successfully uploaded to firebase.
                  let post = {
                      title: that.state.title,
                      description: that.state.description,
                      imageUrl: url
                  }
    
                  that.props.composePost(post);
                  that.setState({ title: '',
                                  description: '',
                                  imageUrl: '' });
    
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
              })
              
          }
        );
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
                  <input
                    type="textarea"
                    id="title"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Image Title..."
                  />
                </div>
                <div>
                  <input
                    type="textarea"
                    id="desc"
                    value={this.state.description}
                    onChange={this.update("description")}
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
            <div id="image-div"></div>
            <br />
            <PostBox text={this.state.newPost} />
          </div>
        );
      }
}

export default PostCompose;
