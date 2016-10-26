require('./HomeComponent.scss')

import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeComponent extends Component {

  static displayName = 'Home Component';

  render() {
    return (
      <div className="home-component-wrapper" >
        Home
      </div>
    );
  }

}

export default HomeComponent
