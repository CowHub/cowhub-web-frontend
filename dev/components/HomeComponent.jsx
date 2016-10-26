require('./HomeComponent.scss')

import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeComponent extends Component {

  static displayName = 'Home Component';

  render() {
    return (
      <div className="home-component-wrapper" >
        <Link className="home-component-link" to='/user/login' >Login</Link>
        <Link className="home-component-link" to='/user/signup' >Sign Up</Link>
      </div>
    );
  }

}

export default HomeComponent
