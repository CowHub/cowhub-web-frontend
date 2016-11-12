require('./CattleRegistrationComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CattleItemComponent from './CattleItemComponent';

import { registerCattle } from '../../actions/index';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegisterCattle: (c) => { dispatch(registerCattle(c)) }
  };
};

class CattleRegistrationComponent extends CattleItemComponent {

  static displayName = 'Cattle Register Component';
  static propTypes = {
    ...CattleItemComponent.propTypes,
    handleRegisterCattle: React.PropTypes.func,
  };
  static defaultProps = {
    ...CattleItemComponent.defaultProps,
    onlyEdit: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      edit: true
    };
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleRegistrationComponent);
