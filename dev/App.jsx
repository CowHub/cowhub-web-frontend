import React, { Component } from 'react'
import { Router, IndexRoute, DefaultRoute, Route, browserHistory } from 'react-router'

import Auth from './Auth';

// Wrapper
import AppWrapper from './components/AppWrapper';

// Home
import HomeComponent from './components/HomeComponent';

// User
import LoginComponent from './components/User/LoginComponent';
import SignUpComponent from './components/User/SignUpComponent';

class App extends Component {

  static displayName = 'CowHub';

  constructor(props) {
    super(props);

    Auth.onChange = this.handleAuthChange
    this.state = {
      authenticated: Auth.isLoggedIn()
    };
  }

  handleAuthChange = (authenticated) => {
    this.setState({
      authenticated: !!authenticated
    });
  }

  render() {
    return (
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
    );
  }

}

export default App
