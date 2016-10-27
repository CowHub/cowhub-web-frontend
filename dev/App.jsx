import React, { Component } from 'react'
import { Router, IndexRoute, DefaultRoute, Route, browserHistory } from 'react-router'

import Auth from './Auth';

import { Provider } from 'react-redux';
import store from './store';

// Wrapper
import AppWrapper from './components/AppWrapper';

// Home
import HomeComponent from './components/HomeComponent';

// User
import LoginComponent from './components/User/LoginComponent';
import SignUpComponent from './components/User/SignUpComponent';

class App extends Component {

  static displayName = 'CowHub';
  
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={AppWrapper} >
            <IndexRoute component={HomeComponent} />
            <Route path='user'>
              <Route path='login' component={LoginComponent} />
              <Route path='signup' component={SignUpComponent} />
              <Route path='profile' component={LoginComponent} />
              <Route path='logout' component={SignUpComponent} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }

}

export default App
