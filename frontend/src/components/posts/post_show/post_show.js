import React from 'react';
import { withRouter } from 'react-router-dom';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId,
      post: ""
    }
  }
  UNSAFE_componentWillMount() {
      this.props.fetchPost(this.state.postId)
        .then( res => {
          console.log(res);
          console.log(this);
          this.setState({
            post: res.post.data
          });
        });
  }

  UNSAFE_componentWillReceiveProps(newState) {
      console.log(newState)
      this.setState({ post: newState.post });
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
      if(!!this.state.post) {
        !!(this.state.post.imageUrl.split(", ").length > 1) ?
            multipleOrNot = (
                <div className="gallery">
                    <div
                        className="gallery-img-div"
                        onClick={this.handlePostClick}>
                        <img className="image" src={this.state.post.imageArr[this.state.post.imageIndex]} alt=""></img>
                    </div>
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
