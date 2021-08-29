import React from "react";

import { incrementLike } from "../services/userService";

class Like extends React.Component {
  state = {
    post: this.props.post,
  };

  handleIncLike = async (postLiked) => {
    const orginalPost = this.state.post;
    const post = { ...postLiked };
    post.postLike++;
    this.setState({ post });

    try {
      await incrementLike(postLiked._id);
    } catch (error) {
      console.log(error);
      this.setState({ post: orginalPost });
    }
  };

  render() {
    const { post } = this.state;

    return (
      <div className="post-like">
        <span
          className="fa fa-heart like-icon"
          onClick={() => this.handleIncLike(post)}
        />
        <span className="like-badge">
          {post.postLike ? post.postLike : "0"}
        </span>
      </div>
    );
  }
}

export default Like;
