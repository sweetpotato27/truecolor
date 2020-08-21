// src/components/posts/post_compose.js

import React from 'react';
import PostBox from './post_box';

class PostCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newPost: "",
            img: {
                title: "",
                description: "",
                image: {
                    data: Buffer,
                    contentType: String
                }
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ newPost: nextProps.newPost.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let post = {
            text: this.state.text,
            img: this.state.img
        };
        console.log("handleSubmit");
        this.props.composePost(post);
        this.setState({ text: '' });
        this.setState({ img: { title: '', decription: '', image: '' } });
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }
    updateTitle() {
        return e => this.setState({
            img: {
                title: e.currentTarget.value
            }
        });
    }
    updateDescription() {
        return e => this.setState({
            img: {
                description: e.currentTarget.value
            }
        });
    }
    updateImage() {
        return e => this.setState({
            img: {
                image: e.currentTarget.value
            }
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="text"
                                id="title"
                                value={this.state.img.title}
                                onChange={this.updateTitle()}
                                placeholder="Image Title..."
                                required
                            />
                        </div>
                        <div>
                            <input type="textarea"
                                id="desc"
                                value={this.state.description}
                                onChange={this.updateDescription()}
                                placeholder="Image Description..."
                                required
                            />
                        </div>
                        <div>
                            <input type="file" 
                                id="image" 
                                onChange={this.updateImage()}
                                value="" 
                                required
                            />
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
