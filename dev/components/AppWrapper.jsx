require('./AppWrapper.scss');

import React, { Component } from 'react';

class AppWrapper extends Component {

  static displayName = 'CowHub Wrapper';
  static propTypes = {
    children: React.PropTypes.object
  };

  render() {
    return (
      <div>
        {/* HEADER HERE */}
        <div className="content-wrapper" >
          { this.props.children }
        </div>
        {/* FOOTER HERE */}
      </div>
    );
  }

};

export default AppWrapper;
