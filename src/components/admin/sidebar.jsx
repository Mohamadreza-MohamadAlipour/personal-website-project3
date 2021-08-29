import React from "react";

import { Link } from "react-router-dom";
import getAdminNavLinks from "../../services/adminNavLinks";

class Sidebar extends React.Component {
  render() {
    const navLinks = getAdminNavLinks();

    return (
      <div className="admin-sidebar">
        <div className="sidebar-links">
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.id} className="nav-item">
                <Link to={nav.link} className="nav-link">
                  <span className={`${nav.icon} nav-icon`} />
                  {nav.text}
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
