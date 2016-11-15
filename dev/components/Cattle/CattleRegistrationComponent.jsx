require('./CattleRegistrationComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CattleItemComponent from './CattleItemComponent';

import {
  registerCattle
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    handleRegisterCattleDisable: ownProps.cancel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegisterCattle: (c) => { dispatch(registerCattle(c)) },
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
    left: {
      editing: {
        style: 'cattle-registration-component-button-register',
        text: 'Register',
        func: (refs, props) => {
          props.handleRegisterCattle({
            country_code: refs.country_code.value,
            herdmark: refs.herdmark.value,
            check_digit: refs.check_digit.value,
            individual_number: refs.individual_number.value,
          });
          props.handleRegisterCattleDisable();
        }
      }
    },
    right: {
      style: 'cattle-registration-component-button-cancel',
      text: 'Cancel',
      func: (c, props) => {
        props.handleRegisterCattleDisable();
      }
    }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleRegistrationComponent);
