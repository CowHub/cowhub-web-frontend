import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

  static displayName = 'Home';

  render() {
    return (
      <div>
        Home page for CowHub! <br/>
        <Link to='/login'>Login</Link> <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }

}

export default Home
