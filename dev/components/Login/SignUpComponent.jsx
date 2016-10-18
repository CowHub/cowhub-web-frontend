import React, { Component } from 'react'
import { Link } from 'react-router'

class SignUpComponent extends Component {

  static displayName = 'SignUp Component';

  render() {
    var signUpForm = {
      color: 'black',
      maxWidth: 380,
      margin: 400
    }

    return (
      <div className="form">

      <ul className="tab-group">
        <li className="tab"><Link to='/login'>Login</Link></li>
        <li className="tab active"><Link to='/signup'>SignUp</Link></li>
      </ul>

        <h1>Sign Up for Free</h1>

        <form action="/" method="post">

        <div className="top-row">
          <div className="field-wrap" >
            <label>
              First Name<span className="req">*</span>
            </label>
            <input type="text" required autoComplete="off" />
          </div>

          <div className="field-wrap">
            <label>
              Last Name<span className="req">*</span>
            </label>
            <input type="text" required autoComplete="off"/>
          </div>
        </div>

        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input type="email"required autoComplete="off"/>
        </div>

        <div className="field-wrap">
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <input type="password" required autoComplete="off"/>
        </div>

        <button type="submit" className="button button-block">Get Started</button>

        </form>
        <Link to='/'>Home</Link>


      </div>
    );
  }

}

export default SignUpComponent
