import React from "react";

import { Link } from "react-router-dom";
import getNavLinks from "../services/navLinks";
import imgProfile from "../image/photo_2020-10-02_02-34-37.jpg";
import { getCoursesCount } from "../services/userService";
import ProfileUser from "./profileUser";

class Sidebar extends React.Component {
  state = {
    coursesCount: "",
  };

  async componentDidMount() {
    const { data: coursesCount } = await getCoursesCount();
    this.setState({ coursesCount: coursesCount.count });
  }
  render() {
    const navLinks = getNavLinks();

    return (
      <div className="sidebar">
        <ProfileUser
          imgProfile={imgProfile}
          profileName={"محمدرضا محمدعلی پور"}
          profileInfo={"مهندس کامپیوتر و برنامه نویس وب"}
        />
        <div className="sidebar-links">
          <ul>
            {navLinks.map((nav) => (
              <li className="nav-item" key={nav.id}>
                <Link to={nav.link} className="nav-link">
                  <span className={`${nav.icon} nav-icon`} />
                  {nav.text}
                  {nav.count ? (
                    <span className="badge-count">
                      {this.state.coursesCount}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
