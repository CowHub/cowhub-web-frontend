require('./SignUpComponent.scss');

import React, { Component } from 'react'
import { Link } from 'react-router'

import $ from 'jquery'

class SignUpComponent extends Component {

  static displayName = 'Signup Component';

  constructor(props) {
    super(props);
    Auth.redirectIfLoggedIn();
  }

  handleSubmit() {
    Auth.register({
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value,
    })
  }

  render() {
    return (
      <div className="signup-component-wrapper" >
        <div className="signup-component-title" >Sign up</div>
        <input
          ref="email" className="signup-component-input"
          type="email" placeholder="Email" />
        <input
          ref="password" className="signup-component-input"
          type="password" placeholder="Password" />
        <input
          ref="password_confirmation" className="signup-component-input"
          type="password" placeholder="Password Confirmation" />
        <button
          onClick={ () => this.handleSubmit() } className="signup-component-button-submit" >
          Log In
        </button>
      </div>
    );
  }

}

export default SignUpComponent
