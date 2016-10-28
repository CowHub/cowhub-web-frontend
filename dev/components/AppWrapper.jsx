require('./AppWrapper.scss');

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    ...state.authentication
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => { dispatch(logoutUser()) },
  };
};

class AppWrapper extends Component {

  static displayName = 'CowHub Wrapper';
  static propTypes = {
    token: React.PropTypes.string,
    children: React.PropTypes.object,
    handleLogout: React.PropTypes.func,
  };

  renderUserLinks() {
    return this.props.token ?
      <ul>
        <li><Link to='/user/profile' >Profile</Link></li>
        <li><button onClick={ () => this.props.handleLogout() } >Logout</button></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
