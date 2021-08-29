import React from "react";

import imgProfile from "../image/photo_2020-10-02_02-34-37.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-desc">
        <h4>محمدرضا محمدعلی پور</h4>
        <p>من به برنامه نویسی وب علاقه دارم</p>
      </div>
      <div className="about-img">
        <img src={imgProfile} alt="" />
      </div>
    </div>
  );
};

export default About;
