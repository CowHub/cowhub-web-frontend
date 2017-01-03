require('./index.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CattleItemComponent from '../CattleItemComponent';

import {
  registerCattle,
  registerCattleDisable,
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegisterCattle: (c) => { dispatch(registerCattle(c)) },
    handleRegisterDisable: () => { dispatch(registerCattleDisable()) },
  };
};

class CattleRegistrationComponent extends CattleItemComponent {

  static displayName = 'Cattle Register Component';
  static propTypes = {
    ...CattleItemComponent.propTypes,
    handleRegisterCattle: React.PropTypes.func,
    handleRegisterDisable: React.PropTypes.func,
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
        }
      }
    },
    right: {
      editing: {
        style: 'cattle-registration-component-button-cancel',
        text: 'Cancel',
        func: (refs, props) => { props.handleRegisterDisable(); }
      }
    }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleRegistrationComponent);
