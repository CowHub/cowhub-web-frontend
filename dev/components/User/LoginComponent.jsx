require('./LoginComponent.scss');

import React, { Component } from 'react'
import { Link } from 'react-router'

import $ from 'jquery'

import Cookie from '../../utils/cookie'

class LoginComponent extends Component {

  static displayName = 'Login Component';

  handleSubmit() {
    const afterLogin = () => {
      window.location = "/"
    };

    $.ajax('//cloud-vm-46-70.doc.ic.ac.uk/user/authenticate', {
      method: 'POST',
      data: {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    }).then((res) => {
      Cookie.setCookie('auth_token', res.auth_token, 3);
      afterLogin();
    }).catch((err) => {
      console.log(err);
      afterLogin();
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
        <button
          onClick={ () => this.handleSubmit() } className="login-component-button-submit" >
          Log In
        </button>
      </div>
    );
  }

}

export default LoginComponent
