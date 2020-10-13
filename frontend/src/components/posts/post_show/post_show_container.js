import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../../actions/post_actions';

const msp = (state, props) => {
  let postId = props.match.params.postId;
  let post = state.entities.posts[postId];

  return ({
    post: post,
    // currentUser: state.entities.users[state.session.id],
    // reviews: state.entities.reviews,
    // users: state.entities.users
  });
}

const mdp = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id))
  };
}

export default connect(msp, mdp)(PostShow);