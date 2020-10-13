import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {
    console.log("MADE IT");
    window.scrollTo(0, 0);
    let postId = this.props.match.params.postId;
    this.props.fetchPost(postId);
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.postId !== this.props.match.params.postId) {
          let postId = this.props.match.params.postId;
    this.props.fetchPost(postId);
    }
  }
  
  
  render() {
    console.log(this.state);
    let { post, currentUser } = this.props;

    return (
      <div className="listingshow__container-main">
        
      </div>
    );
  }
}

export default withRouter(ListingShow);
