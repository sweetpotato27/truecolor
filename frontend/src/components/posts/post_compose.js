// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';
import firebase from '../firebase';

class PostCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      imageUrl: "",
      newPost: "",
      errors: ""
    };

    this.shouldCancel = false;
    this.urlArray = [];
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.composePost = this.composePost.bind(this);
    this.storeFilesInFirebase = this.storeFilesInFirebase.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!!nextProps.newPost) {
      this.setState({ body: nextProps.newPost.body });
    }
  }

  handleSubmit(e) {
    const promises = [];
    let that = this;
    let files;
    e.preventDefault();
    files = this.fileInput.current.files;
    for (let i = 0; i < files.length; i++) {
      promises.push(that.storeFilesInFirebase(that, files[i]));
    }
    Promise.all(promises)
      .then((value) => {
        let url = this.urlArray.join(", ");
        let post = {
          title: that.state.title,
          body: that.state.body,
          imageUrl: url,
        };
        if (post.body === "") {
          let success = document.getElementById("successful-post-compose");
          success.style.display = "none";
          this.setState({errors: "requires body"});
        } else {
          this.setState({ errors: "" }, this.composePost(post))
          
        }
      })
      .catch((errors) => {
      });
  }

  composePost(post) {
    let that = this;
    this.props
      .composePost(post)
      .then(() => setTimeout(() => {
        if (!that.shouldCancel) {
          that.props.history.push("/posts");
        } else {
            this.setState({
              title: "",
              body: "",
              imageUrl: "",
              newPost: "",
              errors: ""
            });
            that.shouldCancel = false;
        }
      }, 2500));
  }

  storeFilesInFirebase(that, file) {
    let uploader = document.getElementById("uploader");
    let success = document.getElementById("successful-post-compose");
    //Get Element

    uploader.style.display = "block";

    // Create a storage ref
    let storageRef = firebase.storage().ref("images/" + file.name);

    // Upload file and save
    let task = storageRef.put(file);

    // The following adds html img element to html document
    // it pulls the image from firebase
    return new Promise(function (resolve, reject) {
      task.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },

        function error(err) {},
        function complete() {
          storageRef
            .getDownloadURL()
            .then(function (url) {
              // we can save url to our database here!
              // we should probably save the title and description and other attributes
              // of a new post here as well.
              // That way they are only saved to db if an image is successfully uploaded to firebase.
              that.urlArray.push(url);
              setTimeout(() => {
                if (!that.shouldCancel) {
                  if (that.state.body !== "") {
                    success.style.display = "block";
                  }
                }
              }, 1);
              uploader.style.display = "none";
              resolve(true);
            })
            .catch(function (error) {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storgage/web/handle-errors
              switch (error.code) {
                case "storage/object-not-found":
                  // File doesn't exist
                  break;
                case "storage/unauthorized":
                  // User doesn't have permission to access the object
                  break;
                case "storage/canceled":
                  // User canceled the upload
                  break;
                case "storage/unknown":
                  // Unknown error occurred, inspect te server reponse
                  break;
                default:
                  break;
              }
            });
        }
      );
    });
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  // Render the post errors if there are any
  renderErrors() {
    if ( this.props.errors.length > 0 ) {
      this.shouldCancel = true;
      return (
        <div id="post-compose-errors">{this.props.errors}</div>
      );
    } else if ( this.state.errors !== "" ) {
      return (
        <div>{this.state.errors}</div>
      )
    } else {
    }
  }

  render() {
    let imageOrProgress;
    !this.state.imageUrl
      ? (imageOrProgress = (
          <div className="progress-div">
            <br />
            <progress value="0" max="100" id="uploader"></progress>
          </div>
        ))
      : (imageOrProgress = (
          <div className="post-box-div">
            <br />
            <PostBox imageUrl={this.state.imageUrl} />
          </div>
        ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {imageOrProgress}
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
                value={this.state.body}
                onChange={this.update("body")}
                placeholder="Image Body..."
              />
            </div>
            <div>
              <input type="file" id="file-input" ref={this.fileInput} multiple />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
        {imageOrProgress}
        <div>
          <h2 id="successful-post-compose">Post uploaded successfully!</h2>
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default PostCompose;
