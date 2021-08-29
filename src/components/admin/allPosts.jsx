import React from "react";

import { toast } from "react-toastify";
import { getPosts, deletePost } from "../../services/userService";
import Pagination from "../pagination";

class AllPosts extends React.Component {
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

  handleRedirect = (post) => {
    this.props.history.push({
      pathname: "/admin/editPost",
      post: post,
    });
  };

  handleDelete = async (postId) => {
    const orginalPosts = this.state.posts;
    const posts = [...this.state.posts];
    const filteredPost = posts.filter((post) => post.id !== postId);
    this.setState({ posts: filteredPost });

    try {
      const { status } = await deletePost(postId);
      if (status === 200) {
        toast.success("پست با موفقیت حذف شد.");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast.error("پستی با این شناسه یافت نشد.");
      }
    }
    this.setState({ posts: orginalPosts });
  };

  render() {
    const { posts, currentPage, postPerPage } = this.state;

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const renderPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(renderPosts);
    let count = 1;

    return (
      <div className="allPosts">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پست</th>
              <th>تاریخ انتشار</th>
              <th>تعداد لایک</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderPosts.map((post) => (
              <tr key={post._id}>
                <th>{count++}</th>
                <td>{post.postTitle}</td>
                <td>{post.postDate}</td>
                <td>{post.postLike}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => this.handleRedirect(post)}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => this.handleDelete(post._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default AllPosts;
