import React, { Component } from 'react'
import { Link } from 'react-router'



class SignUp extends Component {

  static displayName = 'SignUp';

  render() {
    var signUpForm = {
      color: 'black',
      maxWidth: 380,
      margin: 400
    }

    return (
      <div>
        <Link to='/'>Home</Link> <Link to='/login'>Login</Link>
      </div>
    );
  }

}

export default SignUp
