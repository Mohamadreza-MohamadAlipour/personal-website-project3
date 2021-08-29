import React from "react";

import { toast } from "react-toastify";
import { getCourses, deleteCourse } from "../../services/userService";

class AllCourses extends React.Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const { data } = await getCourses();
    this.setState({ courses: data });
  }

  handleRedirect = (course) => {
    this.props.history.push({
      pathname: "/admin/editCourse",
      course: course,
    });
  };

  handleDelete = async (courseId) => {
    const orginalCourses = this.state.courses;
    const courses = [...this.state.courses];
    const filteredCourse = courses.filter((course) => course.id !== courseId);
    this.setState({ courses: filteredCourse });

    try {
      const { status } = await deleteCourse(courseId);
      if (status === 200) {
        toast.success("دوره با موفقیت حذف شد.");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        toast.error("دوره ای با این شناسه یافت نشد.");
      }
      this.setState({ courses: orginalCourses });
    }
  };

  render() {
    const { courses } = this.state;
    console.log(courses);

    let count = 1;

    return (
      <div className="allCourses">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان دوره</th>
              <th>زمان دوره</th>
              <th>قیمت دوره</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <th>{count++}</th>
                <td>{course.title}</td>
                <td>{course.time}</td>
                <td>{course.price}</td>
                <td>
                  <button
                    onClick={() => this.handleRedirect(course)}
                    className="edit-btn"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(course._id)}
                    className="delete-btn"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllCourses;
