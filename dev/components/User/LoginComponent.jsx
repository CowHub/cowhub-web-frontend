require('./UserAuthenticationComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/index';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (p) => { dispatch(loginUser(p)) },
  };
};

class LoginComponent extends Component {

  static displayName = 'Login Component';
  static propTypes = {
    handleLogin: React.PropTypes.func
  };

  handleSubmit() {
    this.props.handleLogin({
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  };

  renderLogo() {
    return (
      <img
        className='uauth-logo'
        src={ require('../../assets/images/CowHub-logo.png') }
        onClick={ () => window.location.replace('/') }
      />
    );
  };

  renderEmailField() {
    return (
      <input
        ref='email' className='uauth-input'
        type='email' placeholder='Email' />
    );
  };

  renderPasswordField() {
    return (
      <input
        ref='password' className='uauth-input'
        type='password' placeholder='Password' />
    );
  };

  renderSignInButton() {
    return (
      <button className='uauth-submit-button'
        onClick={ () => this.handleSubmit() }>
        SIGN IN
      </button>
    );
  };

  renderSignUpNotice() {
    return (
      <div className='uauth-redirect-notice'>
        NOT A MEMBER?
      </div>
    );
  };

  renderSignUpButton() {
    return (
      <button className='uauth-redirect-button'
        onClick={ () => window.location.replace('/user/signup') }
      >
        SIGN UP
      </button>
    );
  };

  render() {
    return (
      <div className='uauth-wrapper' >
        <div className='uauth-form-wrapper'>
          { this.renderLogo() }
          { this.renderEmailField() }
          { this.renderPasswordField() }
          { this.renderSignInButton() }
          { this.renderSignUpNotice() }
          { this.renderSignUpButton() }
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
