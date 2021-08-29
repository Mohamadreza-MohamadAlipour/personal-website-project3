import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
        <p>&copy; تمامی حقوق این سایت محفوظ میباشید</p>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
