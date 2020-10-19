import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../../actions/post_actions';

const mapStateToProps = (state, props) => {
  // let postId = props.match.params.postId;
  // let post = state.entities.posts[postId];
  return ({
    post: state.posts.post,
    postId: props.location.pathname.split("/posts/")[1]
    // currentUser: state.entities.users[state.session.id],
    // reviews: state.entities.reviews,
    // users: state.entities.users
  });
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);