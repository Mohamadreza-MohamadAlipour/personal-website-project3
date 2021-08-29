import React from "react";

import { getPosts } from "../services/userService";
import Pagination from "./pagination";
import Like from "./like";

class Posts extends React.Component {
  state = {
    posts: [],
    currentPage: 1,
    postPerPage: 5,
  };

  async componentDidMount() {
    const { data } = await getPosts();
    this.setState({ posts: data });
  }

  handlePageChange = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  render() {
    const { posts, currentPage, postPerPage } = this.state;

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const renderPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="posts">
        {renderPosts.map((post) => (
          <div className="post" key={post._id}>
            <div className="post-header">
              <div className="post-title">
                <a href="#">{post.postTitle}</a>
              </div>
              <div className="post-date">
                <span className="fa fa-calendar date-icon" />
                {post.postDate}
              </div>
              <div className="post-img">
                <img src={post.imageUrl} style={{ width: "50%" }} />
              </div>
            </div>
            <div className="post-body">
              <div className="post-content">
                <p>{post.postContent}</p>
              </div>
            </div>
            <div className="post-footer">
              <div className="post-tags">
                <span className="fa fa-link tag-icon" />
                برچسب ها :<a href="#">{post.postTags}</a>
              </div>
              <Like post={post} />
            </div>
          </div>
        ))}

        <Pagination
          postsLength={posts.length}
          currentPage={currentPage}
          postPerPage={postPerPage}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Posts;
