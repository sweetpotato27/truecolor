// src/components/posts/posts.js

import React from 'react';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import PostBox from './post_box';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            page: 1,
            frequencyPerPage: 25,
            postsPerPage: [],
            totalPages: 0
        }

        this.changePage = this.changePage.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({
            posts: newState.posts,
            totalPages: Math.ceil(newState.posts.length / this.state.frequencyPerPage)
        });
    }


    changePage = data => {
        let page = data.selected + 1;
        let tempArr = [];
        if (page < 1) this.setState({page: 1});
        if (page > this.state.totalPages) this.setState({page: this.state.totalPages});

        for (let i = (page - 1) * this.state.frequencyPerPage; i < (page * this.state.frequencyPerPage); i++) {
            if (!!this.state.posts[i]) tempArr.push(this.state.posts[i]);
        }
        this.setState({postsPerPage: tempArr});
        tempArr = [];
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>There are no Posts</div>)
        } else {
            return (
                <div>
                    <div className="all-posts">
                        <div className="all-posts-div">
                            {this.state.postsPerPage.map(post => (
                                <PostBox key={post._id}
                                        className="post-box"
                                        postId={post._id}
                                        user={post.user}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body}
                                        imageUrl={post.imageUrl}
                                        date={post.date}
                                        history={this.props.history} />
                            ))}
                        </div>
                    </div>
                    <div className="pagination-div">
                        <ReactPaginate
                            previousLabel={'Previous'}
                            initialPage={0}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.state.totalPages}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={3}
                            onPageChange={this.changePage}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Post);
