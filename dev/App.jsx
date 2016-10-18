import React, { Component } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import HomeComponent from './components/HomeComponent'

// Login
import LoginComponent from './components/Login/LoginComponent'
import SignUpComponent from './components/Login/SignUpComponent'


class App extends Component {

  static displayName = 'CowHub'

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomeComponent} />
        <Route path='login' component={LoginComponent} />
        <Route path='signup' component={SignUpComponent} />
      </Router>

    )
  }

}

export default App
