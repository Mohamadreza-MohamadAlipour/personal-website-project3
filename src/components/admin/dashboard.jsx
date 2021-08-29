import React from "react";

import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import CreatePost from "./createPost";
import AllPosts from "./allPosts";
import CreateCourse from "./createCourse";
import AllCourses from "./allCourses";
import EditPost from "./editPost";
import EditCourse from "./editCourse";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar />
        <Sidebar />
        <main>
          <Switch>
            <Route path="/admin/createPost" component={CreatePost} />
            <Route path="/admin/allPosts" component={AllPosts} />
            <Route path="/admin/createCourse" component={CreateCourse} />
            <Route path="/admin/allCourses" component={AllCourses} />
            <Route path="/admin/editPost" component={EditPost} />
            <Route path="/admin/editCourse" component={EditCourse} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Dashboard;
