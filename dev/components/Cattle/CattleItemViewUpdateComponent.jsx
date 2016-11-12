require('./CattleItemViewUpdateComponent.scss');

import React, { Component } from 'react';
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
  };
  static defaultProps = {
    ...CattleItemComponent.defaultProps,

    left: {
      style: '',
      text: 'Register',
      func: () => { console.log('Update'); }
    },
    right: {
      style: '',
      text: 'Cancel',
      func: () => { console.log('Cancel'); }
    }
  }

  // handleSubmit() {
  //   this.props.handleUpdateCattle(this.props.cattle.id, {
  //     country_code: this.refs.country_code.value,
  //     herdmark: this.refs.herdmark.value,
  //     check_digit: this.refs.check_digit.value,
  //     individual_number: this.refs.individual_number.value,
  //   });
  // }
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
