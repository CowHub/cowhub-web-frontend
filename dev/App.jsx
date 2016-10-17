import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'


class App extends Component {

  static displayName = 'CowHub'

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Router>

    )
  }

}

export default App
