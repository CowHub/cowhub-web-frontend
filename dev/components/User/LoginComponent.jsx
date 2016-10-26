require('./LoginComponent.scss');

import React, { Component } from 'react'
import { Link } from 'react-router'

import $ from 'jquery'

import Cookie from '../../utils/cookie'

class LoginComponent extends Component {

  static displayName = 'Login Component';

  handleSubmit() {
    $.ajax('//localhost:3000/user/authenticate', {
      method: 'POST',
      data: {
        email: this.refs.email.value,
        password: this.refs.password.value,
        password_confirmation: this.refs.password_confirmation.value
      }
    }).then((res) => {
      Cookie.setCookie('auth_token', res.auth_token, 3)
    }).catch((err) => {
      console.log(err);
    })
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
        <input
          ref="password_confirmation" className="login-component-input"
          type="password" placeholder="Password Confirmation" />
        <button
          onClick={ () => this.handleSubmit() } className="login-component-button-submit" >
          Log In
        </button>
      </div>
    );
  }

}

export default LoginComponent
