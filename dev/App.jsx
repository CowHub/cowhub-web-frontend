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
import CattleComponent from './components/Cattle/CattleComponent';

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
            <Route path='cattle'>
              <IndexRoute component={CattleComponent} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }

}

export default App
