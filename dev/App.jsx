import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './components/Home'

class App extends Component {

  static displayName = 'CowHub'

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
      </Router>
    )
  }

}

export default App
