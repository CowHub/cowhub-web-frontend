import React, { Component } from 'react'
import { Router, IndexRoute, DefaultRoute, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import store from './store/store'

// Wrapper
import AppWrapper from './components/AppWrapper'

// Home
import HomeComponent from './components/HomeComponent'

// User
import LoginComponent from './components/User/LoginComponent'
import SignUpComponent from './components/User/SignUpComponent'

// Cattle
import CattleIndexComponent from './components/Cattle/CattleIndexComponent'
import CattleIdentifyComponent from './components/Cattle/CattleIdentifyComponent'

class App extends Component {

  static displayName = 'CowHub'

  handleHomeNotExists(next, replace) {
    replace('/cattle', null, null)
  }

  handleAreLoggedIn(next, replace) {
    if (!store.getState().authentication.token) {
      replace('/user/login', null, null)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={AppWrapper} >
            <IndexRoute component={HomeComponent} onEnter={ this.handleHomeNotExists } />
            <Route path='user'>
              <Route path='login' component={LoginComponent} />
              <Route path='signup' component={SignUpComponent} />
            </Route>
            <Route path='cattle' onEnter={ this.handleAreLoggedIn } >
              <IndexRoute component={CattleIndexComponent} />
              <Route path='identify' component={CattleIdentifyComponent} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }

}

export default App
