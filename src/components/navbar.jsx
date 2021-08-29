import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        وبسایت شخصی
      </a>
      <input type="text" placeholder="جستجو" className="searchbar" />
      <Link to="/login" className="login-style">
        ورود
      </Link>
    </nav>
  );
};

export default Navbar;
