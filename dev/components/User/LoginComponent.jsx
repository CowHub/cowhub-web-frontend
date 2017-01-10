require('./LoginComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/index';

const mapStateToProps = (state) => {
  return {
    ...state.authentication
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (p) => { dispatch(loginUser(p)) },
  };
};

class LoginComponent extends Component {

  static displayName = 'Login Component';
  static propTypes = {
    token: React.PropTypes.string,
    handleLogin: React.PropTypes.func,
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
    this.props.handleLogin({
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  }

  renderLogo() {
    return (
      <img
        className='signin-logo'
        src={ require('../../assets/images/CowHub-logo.png') }
        onClick={ () => window.location.replace('/') }
      />
    );
  };

  renderEmailField() {
    return (
      <input
        ref='email' className='signin-input'
        type='email' placeholder='Email' />
    );
  };

  renderPasswordField() {
    return (
      <input
        ref='password' className='signin-input'
        type='password' placeholder='Password' />
    );
  };

  renderSignInButton() {
    return (
      <button className='signin-sign-in-button'
        onClick={ () => this.handleSubmit() }>
        SIGN IN
      </button>
    );
  };

  renderSignUpNotice() {
    return (
      <div className='signin-sign-up-title'>
        NOT A MEMBER?
      </div>
    );
  };

  renderSignUpButton() {
    return (
      <button className='signin-sign-up-button'
        onClick={ () => window.location.replace('/users/signup') }
      >
        SIGN UP
      </button>
    );
  };

  render() {
    return (
      <div className='signin-wrapper' >
        <div className='signin-form-wrapper'>
          { this.renderLogo() }
          { this.renderEmailField() }
          { this.renderPasswordField() }
          { this.renderSignInButton() }
          { this.renderSignUpNotice() }
          { this.renderSignUpButton() }
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
