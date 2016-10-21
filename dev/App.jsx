import React, { Component } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

// Wrapper
import AppWrapper from './components/AppWrapper';

import HomeComponent from './components/HomeComponent';

// Login
import LoginComponent from './components/Login/LoginComponent';
import SignUpComponent from './components/Login/SignUpComponent';

class App extends Component {

  static displayName = 'CowHub';

  render() {
    return (
      <Router history={browserHistory} >
        <Route path='/app' component={AppWrapper} >
          <Route path='home' component={HomeComponent} />
          <Route path='user'>
            <Route path='login' component={LoginComponent} />
            <Route path='signup' component={SignUpComponent} />
          </Route>
        </Route>
      </Router>
    );
  }

}

export default App
