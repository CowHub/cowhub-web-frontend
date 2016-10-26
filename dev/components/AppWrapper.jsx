require('./AppWrapper.scss');

import React, { Component } from 'react';
import { Link } from 'react-router';

import Auth from '../Auth'

class AppWrapper extends Component {

  static displayName = 'CowHub Wrapper';
  static propTypes = {
    children: React.PropTypes.object
  };

  renderUserLinks() {
    return Auth.isLoggedIn() ?
      <ul>
        <li><Link to='/user/profile' >Profile</Link></li>
        <li><button onClick={ () => Auth.logout() } >Logout</button></li>
      </ul>
      :
      <ul>
        <li><Link to='/user/login' >Login</Link></li>
        <li><Link to='/user/signup' >Sign Up</Link></li>
      </ul>;
  }

  render() {
    return (
      <div>
        {/* HEADER HERE */}
        <div className="header-wrapper">
          { this.renderUserLinks() }
        </div>

        {/* CONTENT HERE */}
        <div className="content-wrapper" >
          { this.props.children }
        </div>

        {/* FOOTER HERE */}
      </div>
    );
  }

};

export default AppWrapper;
