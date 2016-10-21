import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeComponent extends Component {

  static displayName = 'Home Component';

  render() {
    return (
      <div>
        <Link to='/user/login'>Login</Link>
        <Link to='/user/signup'>Sign Up</Link>
      </div>
    );
  }

}

export default HomeComponent
