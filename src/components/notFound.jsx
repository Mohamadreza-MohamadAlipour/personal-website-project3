import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>!404</h1>
      <p>متاسفانه چنین صفحه ای یافت نشد.</p>
      <Link to="/" className="back-link">
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
