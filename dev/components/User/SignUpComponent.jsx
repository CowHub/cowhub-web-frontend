require('./SignUpComponent.scss');

import React, { Component } from 'react'
import { Link } from 'react-router'

import $ from 'jquery'

import Cookie from '../../utils/cookie'

class SignUpComponent extends Component {

  static displayName = 'Signup Component';

  componentWillMount() {
    if (Cookie.getCookie('auth_token')) { window.location = "/" }
  }

  handleSubmit() {
    const afterSignUp = () => {
      window.location = "/"
    };

    $.ajax('//cloud-vm-46-70.doc.ic.ac.uk/user/create', {
      method: 'POST',
      data: {
        email: this.refs.email.value,
        password: this.refs.password.value,
        password_confirmation: this.refs.password_confirmation.value
      }
    }).then((res) => {
      Cookie.setCookie('auth_token', res.auth_token, 3);
      afterSignUp();
    }).catch((err) => {
      console.log(err);
      afterSignUp();
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
