import React, { Component } from 'react'
import { Link } from 'react-router'

class LoginComponent extends Component {

  static displayName = 'Login Component';

  render() {
    return (
        <div>
          <div className="form">
              <Link to='/'>Home</Link> <Link to='/signup'>Sign Up</Link>

            <div className="tab-content">
              <div id="login">
                <h1>Welcome Back!</h1>

                <form action="/" method="post">

                  <div className="field-wrap">
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input type="email"required autoComplete="off"/>
                </div>

                <div className="field-wrap">
                  <label>
                    Password<span className="req">*</span>
                  </label>
                  <input type="password"required autoComplete="off"/>
                </div>

                <p className="forgot"><a href="#">Forgot Password?</a></p>

                <button className="button button-block">Log In</button>

                </form>

              </div>
            </div>
          </div>
        </div>
    );
  }

}

export default LoginComponent
