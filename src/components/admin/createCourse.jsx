import React from "react";

import { createCourse } from "../../services/userService";
import { toast } from "react-toastify";

class CreateCourse extends React.Component {
  state = {
    title: "",
    time: "",
    price: "",
    imageUrl: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await createCourse(
        JSON.parse(JSON.stringify(this.state))
      );
      if (status === 200) {
        toast.success("دوره با موفقیت ساخته شد.");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        toast.error("لطفا کلیه موارد را پر کنید.");
      }
    }
  };

  render() {
    const { title, time, price, imageUrl } = this.state;

    return (
      <div className="course-form">
        <form onSubmit={this.handleSubmit}>
          <label>عنوان دوره</label>
          <input
            type="text"
            placeholder="عنوان دوره"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <label>زمان دوره</label>
          <input
            type="text"
            placeholder="ساعت:دقیقه:ثانیه"
            value={time}
            onChange={(e) => this.setState({ time: e.target.value })}
            className="time-input"
          />
          <label>قیمت دوره</label>
          <input
            type="text"
            placeholder="قیمت به تومان"
            value={price}
            onChange={(e) => this.setState({ price: e.target.value })}
            className="price-input"
          />
          <input
            type="text"
            placeholder="لینک عکس"
            value={imageUrl}
            onChange={(e) => this.setState({ imageUrl: e.target.value })}
          />
          <button>ساخت دوره جدید</button>
        </form>
      </div>
    );
  }
}

export default CreateCourse;
