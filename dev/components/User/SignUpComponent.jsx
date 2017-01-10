require('./UserAuthenticationComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/index';

const mapStateToProps = (state) => {
  return {
    ...state.authentication
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegister: (p) => { dispatch(registerUser(p)) }
  };
};

class SignUpComponent extends Component {

  static displayName = 'Signup Component';
  static propTypes = {
    token: React.PropTypes.string,
    handleRegister: React.PropTypes.func,
  };

  componentWillMount() {
    this.handleAuthenticated(this.props);
  }

  componentWillReceiveProps(props) {
    this.handleAuthenticated(props);
  }

  handleAuthenticated(props) {
    if (props.token) {
      console.log('Redirecting... you are authenticated already.')
      window.location = '/';
    }
  }

  handleSubmit() {
    this.props.handleRegister({
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value
    })
  }

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

  renderPasswordConfirmationField() {
    return (
      <input
        ref='password' className='uauth-input'
        type='password' placeholder='Password Confirmation' />
    );
  };

  renderSignUpButton() {
    return (
      <button className='uauth-submit-button'
        onClick={ () => this.handleSubmit() }>
        SIGN UP
      </button>
    );
  };

  renderSignInNotice() {
    return (
      <div className='uauth-redirect-notice'>
        ALREADY A MEMBER?
      </div>
    );
  };

  renderSignInButton() {
    return (
      <button className='uauth-redirect-button'
        onClick={ () => window.location.replace('/user/signin') }
      >
        SIGN IN
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
          { this.renderPasswordConfirmationField() }
          { this.renderSignUpButton() }
          { this.renderSignInNotice() }
          { this.renderSignInButton() }
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
