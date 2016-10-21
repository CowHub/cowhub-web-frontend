import React, { Component } from 'react';

class AppWrapper extends Component {

  static displayName = 'CowHub Wrapper';
  static propTypes = {
    children: React.PropTypes.object
  };

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

};

export default AppWrapper;
