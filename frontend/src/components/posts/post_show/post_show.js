import React from 'react';
import PostGallery from '../post_gallery';
import { withRouter } from 'react-router-dom';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        imageArr: [],
        postId: props.postId,
        post: "",
        imageIndex: 0
        }

        this.clickButton = this.clickButton.bind(this);
        this.toggleVisiblility = this.toggleVisiblility.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.props.fetchPost(this.state.postId)
            .then( res => {
            this.setState({
                post: res.post.data,
                imageArr: res.post.data.imageUrl.split(", ")
            });
            });
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ post: newState.post });
    }

  
    toggleVisiblility(id) {
        let images = [].slice.call(document.getElementsByClassName(`gallery-img__${this.props.imageUrl}`));
        let ele = document.getElementById(`${this.state.post.imageUrl}__${id}`);
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
        if (e.target.id === "gallery-button-right") {
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

    render() {
        let multipleOrNot;
        if(!!this.state.post) {
            !!(this.state.post.imageUrl.split(", ").length > 1) ?
                multipleOrNot = (
                    <div className="gallery">
                        <div
                            id="imageGalleryContainer"
                            className="img-gallery-div"
                            onClick={this.handlePostClick}>
                            {this.state.post.imageUrl.split(", ").map( (img, index) => (
                                <PostGallery 
                                    key={img}
                                    image={img}
                                    index={index}
                                    postId={this.state.post.postId}
                                    imageUrl={this.state.post.imageUrl} 
                                />
                            ))}
                        </div>
                        <div>
                            <input type="button"
                                    id="gallery-button-left"
                                    onClick={this.clickButton}
                                    value="<"/>
                            <input type="button"
                                    id="gallery-button-right"
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
                            <img className="image" src={this.state.post.imageUrl} alt=""></img>
                        </div>
                    )
        }
            return (
                <div className="post-box-div">

                    <div className="post-header">
                        <div className="name">
                            <a href={`#/posts/${this.props.fizz}`}>
                                <div className="profile-image" item-prop="image"></div>
                            </a>
                            <div className="post-name">
                                <h3>{this.state.post.user ? this.state.post.user : ""}</h3>
                            </div>
                        </div>
                            <div className="date">
                                <h3>{this.state.post.date ? this.state.post.date.split("T")[0] : ""}</h3>
                            </div>
                    </div>
                        {/* should we have similar logic for the image tag? */}
                        {/* might make sense to have a simple logo as placeholder for unloadable imageUrls */}
                        {multipleOrNot}
                        <div className="post-body">
                            <h2>{this.state.post.title ? this.state.post.title : ""}</h2>
                            <p>{this.state.post.body ? this.state.post.body : ""}</p>
                        </div>
                        <hr/>
                </div>
            );
    };
}

export default withRouter(PostShow);
