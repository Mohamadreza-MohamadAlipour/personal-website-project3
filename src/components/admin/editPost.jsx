import React from "react";

import _ from "lodash";
import { editPost } from "../../services/userService";
import { toast } from "react-toastify";
class EditPost extends React.Component {
  state = {
    _id: "",
    postTitle: "",
    postDate: "",
    postImageUrl: "",
    postContent: "",
    postTags: "",
    postLike: "",
  };

  componentDidMount() {
    const { post } = this.props.location;
    if (!post) return this.props.history.push("/admin/allPosts");

    this.setState({
      _id: post._id,
      postTitle: post.postTitle,
      postDate: post.postDate,
      postImageUrl: post.postImageUrl,
      postContent: post.postContent,
      postTags: post.postTags,
      postLike: post.postLike,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status } = await editPost(JSON.parse(JSON.stringify(this.state)));
      if (status === 200) {
        toast.success("پست با موفقیت ویرایش شد.");
      }
      this.props.history.push("/admin/allPosts");
    } catch (error) {
      console.log(error);
      console.log(this.state);
      if (error.response && error.response.status === 400) {
        toast.error("لطفا کلیه موارد را پر کنید.");
      }
    }
  };

  render() {
    const { postTitle, postImageUrl, postContent, postTags } = this.state;

    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <label>عنوان پست</label>
          <input
            type="text"
            placeholder="عنوان"
            value={postTitle}
            onChange={(e) => this.setState({ postTitle: e.target.value })}
          />
          <input
            type="text"
            placeholder="آدرس عکس"
            value={postImageUrl}
            onChange={(e) => this.setState({ postImageUrl: e.target.value })}
          />
          <textarea
            placeholder="متن پست"
            value={postContent}
            onChange={(e) => this.setState({ postContent: e.target.value })}
          />
          <input
            type="text"
            placeholder="برچسب ها را با (,) از هم جدا کنید"
            value={postTags}
            onChange={(e) =>
              this.setState({ postTags: _.split(e.target.value, ",") })
            }
          />
          <button>ویرایش پست</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
