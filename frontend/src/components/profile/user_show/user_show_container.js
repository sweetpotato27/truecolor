import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUserPosts } from '../../../actions/post_actions';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state, props) => {
  return ({
    users: state.posts.user,
    posts: Object.values(state.posts.user),
    userId: props.location.pathname.split("/users/")[1]
  });
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUserPosts: id => dispatch(fetchUserPosts(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);