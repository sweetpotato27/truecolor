// src/components/posts/post_box.js

import React from 'react';
import PostGallery from './post_gallery';
// import { Link } from 'react-router-dom';

class PostBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArr: this.props.imageUrl.split(", "),
            imageIndex: 0,
            imgBgnIdx: -1
        }
        this.clickButton = this.clickButton.bind(this);
        this.handlePostClick = this.handlePostClick.bind(this);
        this.toggleVisiblility = this.toggleVisiblility.bind(this);
    }

    componentDidMount() {
        if (this.state.imageArr.length > 1) {
            document.getElementById(`gallery-button-left-${this.props.postId}`).click()
        }
    }

    toggleVisiblility(id) {
        let images = [].slice.call(document.getElementsByClassName(`gallery-img__${this.props.imageUrl}`));
        let ele = document.getElementById(`${this.props.imageUrl}__${id}`);
        images.forEach((img, index) => {
            if (index !== id) {
                images[index].style.display = "none";
                // images[index].style.visibility = "hidden";
                // images[index].style.opacity = "0";
                // images[index].style.width = "0%";
                // images[index].style.transition = "visibilty 0s, width 3s"
                
            }
        })
        ele.style.display = "block";
        // ele.style.visibility = "visible";
        // ele.style.opacity = "1";
        // ele.style.width = "100%";
        // ele.firstChild.style.width = "100%";
    }

    clickButton(e) {
        if (e.target.id === `gallery-button-left-${this.props.postId}`) {
            if (this.state.imageIndex + 1 > this.state.imageArr.length - 1) {
                this.setState({imageIndex: 0});
                this.toggleVisiblility(this.state.imageIndex);
            } else {
                this.setState({imageIndex: this.state.imageIndex + 1});
                this.toggleVisiblility(this.state.imageIndex);
            }
        } else {
            if (this.state.imageIndex - 1 < 0) {
                this.setState({ imageIndex: this.state.imageArr.length - 1 })
                this.toggleVisiblility(this.state.imageIndex);
            } else {
                this.setState({ imageIndex: this.state.imageIndex - 1 })
                this.toggleVisiblility(this.state.imageIndex);
            }
        }
    }

    handlePostClick() {
        this.props.history.push(`/posts/${this.props.postId}`);
    }           

    render() {
        let multipleOrNot;
        !!(this.props.imageUrl.split(", ").length > 1) ?
            multipleOrNot = (
                <div className="gallery">
                    <div
                        id="imageGalleryContainer"
                        className="img-gallery-div"
                        onClick={this.handlePostClick}>
                        {this.props.imageUrl.split(", ").map( (img, index) => (
                            <PostGallery 
                                key={img}
                                image={img}
                                index={index}
                                postId={this.props.postId}
                                imageUrl={this.props.imageUrl} 
                            />
                        ))}
                    </div>
                    <div>
                        <input type="button"
                                id={`gallery-button-left-${this.props.postId}`}
                                onClick={this.clickButton}
                                value="<"/>
                        <input type="button"
                                id={`gallery-button-right-${this.props.postId}`}
                                onClick={this.clickButton}
                                value=">"/>
                    </div>
                </div>
            )
            : this.props.imageUrl === "" ?
                multipleOrNot = (
                    <div>

                    </div>
                )
                : multipleOrNot = (
                    <div
                        className="gallery-img-div"
                        onClick={this.handlePostClick}>
                        <img className="image" src={this.props.imageUrl} alt=""></img>
                    </div>
                )
        return (
            <div className="post-box-div">

                <div className="post-header">
                    <div className="name">
                        <a href={`#/users/${this.props.userId}`}>
                            <div className="profile-image" item-prop="image"></div>
                        </a>
                        <div className="post-name">
                            <h3>{this.props.user ? this.props.user : ""}</h3>
                        </div>
                    </div>
                        <div className="date">
                            <h3>{this.props.date ? this.props.date.split("T")[0] : ""}</h3>
                        </div>
                </div>
                    {/* should we have similar logic for the image tag? */}
                    {/* might make sense to have a simple logo as placeholder for unloadable imageUrls */}
                    {multipleOrNot}
                    <div className="post-body">
                        <h2>{this.props.title ? this.props.title : ""}</h2>
                        <p>{this.props.body ? this.props.body : ""}</p>
                    </div>
                    <hr/>
            </div>
        );
    }
}

export default PostBox;
