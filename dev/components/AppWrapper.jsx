require('./AppWrapper.scss')

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

  handleLogout() {
    this.props.handleLogout();
    window.location = '/';
  }

  renderUserLinks() {
    return this.props.token ?
      <ul className="nav navbar-nav navbar-right">
        {/* <li><Link className='navbar-link' to='/cattle' >Cattle</Link></li> */}
        <li><Link to='/cattle/find' className='navbar-link' >Find</Link></li>
        <li><button className='btn navbar-btn navbar-link' onClick={ () => this.handleLogout() } >Logout</button></li>
      </ul>
      :
      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/user/login' className='navbar-link' >Login</Link></li>
        <li><Link to='/user/signup' className='navbar-link' >Sign Up</Link></li>
      </ul>
      ;
  }

  render() {
    return (
      <div>
        {/* HEADER HERE */}
        {/* <!-- Fixed navbar --> */}
        <nav className="app-nav navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand navbar-link" to='/' >CowHub</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              { this.renderUserLinks() }
            </div>
            {/* <!--/.nav-collapse --> */}
          </div>
        </nav>

        {/* CONTENT HERE */}
        <div className="container content-wrapper" >
          { this.props.children }
        </div>

        {/* FOOTER HERE */}
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
