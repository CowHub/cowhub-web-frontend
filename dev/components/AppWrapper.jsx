require('./AppWrapper.scss')

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { validateToken } from '../actions';

const mapStateToProps = (state) => {
  return {
    ...state.authentication
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleValidateToken: () => dispatch(validateToken())
  };
};

class AppWrapper extends Component {

  static displayName = 'CowHub Wrapper';
  static propTypes = {
    children: PropTypes.object,
    handleValidateToken: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.handleValidateToken()
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
