import React, { Component } from 'react'
import { Router, IndexRoute, DefaultRoute, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux';
import store from './store/store';

// Wrapper
import AppWrapper from './components/AppWrapper';

// Home
import HomeComponent from './components/HomeComponent';

// User
import LoginComponent from './components/User/LoginComponent';
import SignUpComponent from './components/User/SignUpComponent';

// Cattle
import CattleIndexComponent from './components/CattleIndexComponent';
import CattleIdentifyComponent from './components/CattleIdentifyComponent';

class App extends Component {

  static displayName = 'CowHub';

  handleAreLoggedIn() {
    if (!store.getState().authentication.token) {
      window.location = '/user/login';
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={AppWrapper} >
            <IndexRoute onEnter={ () => { this.handleAreLoggedIn() } } component={CattleIndexComponent} />
            <Route path='user'>
              <Route path='login' component={LoginComponent} />
              <Route path='signup' component={SignUpComponent} />
            </Route>
            <Route path='cattle'>
              <Route path='identify' component={CattleIdentifyComponent} />
              <IndexRoute onEnter={ () => { this.handleAreLoggedIn() } } component={CattleIndexComponent} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }

}

export default App
