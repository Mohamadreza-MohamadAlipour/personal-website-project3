import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Posts from './components/posts'
import Footer from './components/footer'
import Courses from './components/courses'
import Education from './components/education'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <main>
          <Switch>
            <Route path='/courses' component={Courses} />
            <Route path='/education' component={Education} />
            <Route path='/skill' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/' exact component={Posts} />
            <Redirect to='/notFound' />
          </Switch>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
