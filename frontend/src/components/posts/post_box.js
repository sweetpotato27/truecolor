// src/components/posts/post_box.js

import React from 'react';

class PostBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArr: this.props.imageUrl.split(", "),
            imageIndex: 0
        }
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(direction) {
        return e => direction === "right" ? (
            this.state.imageIndex + 1 > this.state.imageArr.length - 1 ? (
                this.setState({imageIndex: 0})
            ) : (
                this.setState({imageIndex: this.state.imageIndex + 1})
            )
        ) : (
            this.state.imageIndex - 1 < 0 ? (
                this.setState({ imageIndex: this.state.imageArr.length - 1 })
            ) : (
                this.setState({ imageIndex: this.state.imageIndex - 1 })
            )
        )
    }

    render() {
        let multipleOrNot;
        // console.log(multipleOrNot);
        !!(this.props.imageUrl.split(", ").length > 1) ?
            multipleOrNot = (
                <div className="gallery">
                    <img className="image" src={this.state.imageArr[this.state.imageIndex]} alt=""></img>
                    <div>
                        <input type="button"
                                id="gallery-button-left"
                                onClick={this.clickButton("left")}
                                value="<"/>
                        <input type="button"
                                id="gallery-button-right"
                                onClick={this.clickButton("right")}
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
                    <div>
                        <img className="image" src={this.props.imageUrl} alt=""></img>
                    </div>
                )
        return (
            <div className="post-box-div">
                <div class="post-header">
                    <div className="name">
                        <div class="profile-image" data-image-mode="cover" item-prop="image"></div>
                        <h3><a href="#">{this.props.user ? this.props.user : ""}</a></h3>
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
