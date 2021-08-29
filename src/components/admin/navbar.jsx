import React from "react";

import { Link } from "react-router-dom";
import { getPostsCount, getCoursesCount } from "../../services/userService";

class Navbar extends React.Component {
  state = {
    postsCount: "",
    coursesCount: "",
  };

  async componentDidMount() {
    const { data: postsCount } = await getPostsCount();
    const { data: coursesCount } = await getCoursesCount();

    this.setState({
      postsCount: postsCount.count,
      coursesCount: coursesCount.count,
    });
  }

  render() {
    const { postsCount, coursesCount } = this.state;

    return (
      <nav className="admin-navbar">
        <a href="#" className="navbar-brand">
          سلام محمدرضا
        </a>
        <p className="post-count">
          تعداد پست ها :<span>{postsCount}</span>
        </p>
        <p className="course-count">
          تعداد دوره ها :<span>{coursesCount}</span>
        </p>
        <Link to="/logout" className="logout-style">
          خروج
        </Link>
      </nav>
    );
  }
}

export default Navbar;
