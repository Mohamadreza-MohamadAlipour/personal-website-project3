import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './index.css'
import App from './App'
import Login from './components/login'
import NotFound from './components/notFound'
import Dashboard from './components/admin/dashboard'
import Logout from './components/logout'
import reportWebVitals from './reportWebVitals'
import './css/font-awesome.css'
import './css/ReactToastify.css'
import './css/app.css'
import './css/navbar.css'
import './css/sidebar.css'
import './css/profileUser.css'
import './css/posts.css'
import './css/like.css'
import './css/footer.css'
import './css/pagination.css'
import './css/courses.css'
import './css/education.css'
import './css/skills.css'
import './css/about.css'
import './css/contact.css'
import './css/notFound.css'
import './css/login.css'
import './css/admin/navbar.css'
import './css/admin/sidebar.css'
import './css/admin/createAndEditPost.css'
import './css/admin/allPosts.css'
import './css/admin/createAndEditCourse.css'
import './css/admin/allCourses.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/notFound' component={NotFound} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />
      <Route
        path='/admin'
        render={() => {
          if (localStorage.getItem('token')) return <Dashboard />
          else return <Redirect to='/' />
        }}
      />
      <Route path='/' component={App} />
      <Redirect to='/notFound' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
