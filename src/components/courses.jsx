import React from "react";

import { getCourses } from "../services/userService";

class Courses extends React.Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const { data } = await getCourses();
    this.setState({ courses: data });
  }

  render() {
    return (
      <div className="courses">
        {this.state.courses.map((course) => (
          <div key={course._id} className="course">
            <div className="course-img">
              <img src={course.imageUrl} alt="" />
            </div>
            <div className="course-title">{course.title}</div>
            <div className="course-info">
              <div className="course-time">
                <span className="fa fa-clock-o" />
                {course.time}
              </div>
              <span className="course-price">{course.price}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Courses;
