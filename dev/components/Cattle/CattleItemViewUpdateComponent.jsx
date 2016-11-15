require('./CattleItemViewUpdateComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  updateCattle,
  deleteCattle,
  editCattleDisable,
  deleteCattleDisable,
} from '../../actions';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateCattle: (id, p) => { dispatch(updateCattle(id, p)); },
    handleDeleteCattle: (id) => { dispatch(deleteCattle(id)); },
    handleEditCattleDisable: (id) => { dispatch(editCattleDisable(id)); },
    handleDeleteCattleDisable: (id) => { dispatch(deleteCattleDisable(id)); },
  };
};

class CattleItemViewUpdateComponent extends CattleItemComponent {

  static displayName = 'Cattle Item View Update Component';
  static propTypes = {
    ...CattleItemComponent.propTypes,
    handleUpdateCattle: PropTypes.func,
  };
  static defaultProps = {
    ...CattleItemComponent.defaultProps,
    left: {
      editing: {
        style: 'cattle-update-delete-component-button-update',
        text: 'Update',
        func: (refs, props) => {
          var params = {
            country_code: refs.country_code.value ? refs.country_code.value : props.cattle.country_code,
            herdmark: refs.herdmark.value ? refs.herdmark.value : props.cattle.herdmark,
            check_digit: refs.check_digit.value ? refs.check_digit.value : props.cattle.check_digit,
            individual_number: refs.individual_number.value ? refs.individual_number.value : props.cattle.individual_number,
          }
          props.handleUpdateCattle(props.cattle.id, params);
        }
      },
      deleting: {
        style: 'cattle-update-delete-component-button-delete',
        text: 'Confirm Delete',
        func: (refs, props) => {
          props.handleDeleteCattle(props.cattle.id);
        }
      },
    },
    right: {
      editing: {
        style: 'cattle-update-delete-component-button-cancel',
        text: 'Cancel',
        func: (refs, props) => { props.handleEditCattleDisable(props.cattle.id); },
      },
      deleting: {
        style: 'cattle-update-delete-component-button-cancel',
        text: 'Cancel',
        func: (refs, props) => { props.handleDeleteCattleDisable(props.cattle.id); },
      }
    },
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleItemViewUpdateComponent);
