import React, { Component } from 'react'
import { Link } from 'react-router'

class LoginComponent extends Component {

  static displayName = 'Login Component';

  render() {
    return (
      <div className="login-component-wrapper" >
        <div className="login-component-title" >Log in</div>
        <input className="login-component-input" type="email" placeholder="Email" />
        <input className="login-component-input" type="password" placeholder="Password" />
        <button className="button button-block">Log In</button>
      </div>
    );
  }

}

export default LoginComponent
