import React, { Component } from 'react'
import { Link } from 'react-router'


class Login extends Component {

  static displayName = 'Login';

  render() {
    return (
        <div>
          <div className="form">
              <Link to='/'>Home</Link> <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
    );
  }

}

export default Login
