require('./CattleItemViewUpdateComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  updateCattle,
  deleteCattle
} from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateCattle: (id, p) => { dispatch(updateCattle(id, p)) },
    handleDeleteCattle: (id) => { dispatch(deleteCattle(id)) },
  };
};

class CattleItemViewUpdateComponent extends CattleItemComponent {

  static displayName = 'Cattle Update Component';
  static propTypes = {
    ...CattleItemComponent.propTypes,
    handleUpdateCattle: PropTypes.func,
  };
  static defaultProps = {
    ...CattleItemComponent.defaultProps,
    left: {
      style: '',
      text: 'Update',
      func: (refs, props) => {
        var params = {
          country_code: refs.country_code.value ? refs.country_code.value : props.country_code,
          herdmark: refs.herdmark.value ? refs.herdmark.value : props.herdmark,
          check_digit: refs.check_digit.value ? refs.check_digit.value : props.check_digit,
          individual_number: refs.individual_number.value ? refs.individual_number.value : props.individual_number,
        }
        props.handleUpdateCattle(props.cattle.id, params);
      }
    },
    right: {
      style: '',
      text: 'Cancel',
      func: (state) => { console.log("cancel"); state.cancel.func(); },
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      clickUpdate: {
        style: 'cattle-update-delete-component-button-update',
        text: 'Update',
        func: () => {
          this.setState( { edit: true, } );
        }
      },
      cancel: {
        style: 'cattle-update-delete-component-button-update',
        text: 'Cancel',
        func: () => {
          this.setState( { edit: false, } );
        }
      }
    }
  }

  handleUpdate() {
    var cc = this.refs.country_code.value ? this.refs.country_code.value : this.props.country_code;
    var h = this.refs.herdmark.value ? this.refs.herdmark.value : this.props.herdmark;
    var cd = this.refs.check_digit.value ? this.refs.check_digit.value : this.props.check_digit;
    var idn = this.refs.individual_number.value ? this.refs.individual_number.value : this.props.individual_number;
    this.props.handleUpdateCattle(this.props.cattle.id, {
      country_code: cc,
      herdmark: h,
      check_digit: cd,
      individual_number: idn,
    });
  }

  //
  // handleConfirmDelete() {
  //   this.props.handleDeleteCattle(this.props.cattle.id);
  // }
  //
  // renderDeleting() {
  //   return (
  //     <div>
  //       <br/>
  //       <div className="cattle-update-delete-component-form">
  //         <h2>
  //           Confirm Delete
  //         </h2>
  //         Are you sure you want to delete your cattle?
  //         <br/><br/>
  //         <button onClick={ () => this.handleConfirmDelete() } className="update-component-button-delete" >
  //           Confirm
  //         </button>
  //         <button onClick={ () => this.handleDelete() } className="update-component-button" >
  //           Cancel
  //         </button>
  //           <br/><br/>
  //       </div>
  //     </div>
  //   );
  // }
  //
  // render() {
  //   let {
  //     country_code,
  //     herdmark,
  //     check_digit,
  //     individual_number,
  //   } = this.props.cattle;
  //
  //   return (
  //     <div className="cattle-update-delete-component-wrapper">
  //       {this.state.submitted ?
  //         <div>
  //         {!this.state.deleted && this.renderButtons()}
  //         <div className="cattle-update-delete-component-form" >
  //           <h2>
  //             Update Cattle
  //           </h2>
  //           <div className="row cattle-update-delete-component-data-wrapper" >
  //           <div className="col-lg-5 row">
  //               <div className="col-lg-5 cattle-update-delete-component-data-label">
  //                 Country Code
  //               </div>
  //               {this.renderRef("country_code", 2, "col-lg-8", country_code)}
  //             </div>
  //             <div className="col-lg-5 row">
  //               <div className="col-lg-5 cattle-update-delete-component-data-label">
  //                 Herdmark
  //               </div>
  //               {this.renderRef("herdmark", 6, "col-lg-8", herdmark)}
  //             </div>
  //             <div className="col-lg-5 row">
  //               <div className="col-lg-5 cattle-update-delete-component-data-label">
  //                 Check Digit
  //               </div>
  //               {this.renderRef("check_digit", 1, "col-lg-8", check_digit)}
  //             </div>
  //             <div className="col-lg-5 row">
  //               <div className="col-lg-5 cattle-update-delete-component-data-label">
  //                 Individual No.
  //               </div>
  //               {this.renderRef("individual_number", 5, "col-lg-8", individual_number)}
  //             </div>
  //           </div>
  //
  //           <button
  //               onClick={ () => this.handleSubmit() } className="update-component-button active" >
  //             Update</button>
  //           <button
  //               onClick={ () => this.handleClick() } className="update-component-button" >
  //             Cancel</button>
  //           <br/>
  //         </div>
  //         <br/>
  //         { this.state.deleted && this.renderButtons() }
  //         </div>
  //         :
  //         <div className="row">
  //         <button
  //               onClick={ () => this.handleClick() } className="update-component-button" >
  //           Update Cattle</button>
  //         {this.renderButtons()}
  //         </div>}
  //       <br/><br/>
  //     </div>
  //   );
  // }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleItemViewUpdateComponent);
