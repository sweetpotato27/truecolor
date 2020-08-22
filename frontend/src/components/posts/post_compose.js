// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            imageFile: null,
            imageUrl: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ title: nextProps.title, 
                        description: nextProps.description, 
                        imageFile: nextProps.imageFile, 
                        imageUrl: nextProps.imageUrl });
        console.log(this.state.t);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.imageFile);
        formData.append('upload_preset', 'true-color');
        formData.append('cloud_name', 'potato27');
        this.props.composePost(formData);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ imageFile: file, imageUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }
    handleImageUpload(e) {
        const file = e.currentTarget.files[0]
        const formData = new FormData();
        formData.append("file", file);
        // replace this with your upload preset name
        formData.append("upload_preset", "true-color");
        const options = {
          method: "POST",
          body: formData,
        };

        // replace cloudname with your Cloudinary cloud_name
        return fetch("https://api.cloudinary.com/v1_1/potato27", options)
          .then((res) => res.json())
          .then((res) => {
              this.setState({
                  imageUrl: res.secure_url,
                  imageAlt: `An image of ${res.original_filename}`
              })
          })
          .catch((err) => console.log(err));
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


    render() {
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl} alt="preview" className="photo" /> : null;
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="text"
                                id="title"
                                value={this.state.title}
                                onChange={this.update('title')}
                                placeholder="Image Title..."
                            />
                        </div>
                        <div>
                            <input type="textarea"
                                id="desc"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Image Description..."
                            />
                        </div>
                        <div>
                            <input type="file" 
                                id="image" 
                                onChange={this.handleImageUpload}
                            />
                        </div>
                        <div className="photo-preview">
                            {preview}
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
