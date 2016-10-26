require('./LoginComponent.scss');

import React, { Component } from 'react'
import { Link } from 'react-router'

import Auth from '../../Auth'

import $ from 'jquery'

class LoginComponent extends Component {

  static displayName = 'Login Component';

  constructor(props) {
    super(props);
    Auth.redirectIfLoggedIn();
  }

  handleSubmit() {
    Auth.login({
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  }

  render() {
    return (
      <div className="login-component-wrapper" >
        <div className="login-component-title" >Log in</div>
        <input
          ref="email" className="login-component-input"
          type="email" placeholder="Email" />
        <input
          ref="password" className="login-component-input"
          type="password" placeholder="Password" />
        <button
          onClick={ () => this.handleSubmit() } className="login-component-button-submit" >
          Log In
        </button>
      </div>
    );
  }

}

export default LoginComponent
