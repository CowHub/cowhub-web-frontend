import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeComponent extends Component {

  static displayName = 'Home Component';

  render() {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }

}

export default HomeComponent
