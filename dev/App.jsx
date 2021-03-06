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

class App extends Component {

  static displayName = 'CowHub'

  handleUserAlreadySignedIn(next, replace) {
    if (store.getState().authentication.token)
      replace('/cattle', null, null)
  }

  handleAreLoggedIn(next, replace) {
    if (!store.getState().authentication.token) {
      replace('/user/signin', null, null)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={AppWrapper} >
            <IndexRoute component={HomeComponent} onEnter={ this.handleUserAlreadySignedIn } />
            <Route path='user' onEnter={ this.handleUserAlreadySignedIn }>
              <Route path='signin' component={LoginComponent} />
              <Route path='signup' component={SignUpComponent} />
            </Route>
            <Route path='cattle' onEnter={ this.handleAreLoggedIn } >
              <IndexRoute component={CattleIndexComponent} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App
