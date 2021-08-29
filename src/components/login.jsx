import React from "react";

import { ToastContainer, toast } from "react-toastify";
import { login } from "../services/userService";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login(this.state.email, this.state.password);
      localStorage.setItem("token", data);
      this.props.history.replace("/admin");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        toast.error("ایمیل یا پسورد اشتباه است.");
      }
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h1>لطفا وارد شوید</h1>
            <input
              type="text"
              placeholder="آدرس ایمیل"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="کلمه عبور"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button>ورود</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
