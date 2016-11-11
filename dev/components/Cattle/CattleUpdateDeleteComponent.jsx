require('./CattleUpdateDeleteComponent.scss');

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

class CattleUpdateDeleteComponent extends Component {

  static displayName = 'Cattle Update Component';
  static propTypes = {
    cattle: React.PropTypes.shape({ breed: React.PropTypes.string,
      check_digit: React.PropTypes.number.isRequired,
      country_code: React.PropTypes.string.isRequired,
      dob: React.PropTypes.string,
      gender: React.PropTypes.string,
      herdmark: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      individual_number: React.PropTypes.number.isRequired,
      name: React.PropTypes.string,
    }),
    handleUpdateCattle: React.PropTypes.func,
    handleDeleteCattle: React.PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      submitted: false,
      deleted: false,
    }
  }



  handleClick() {
    this.setState({ submitted: !this.state.submitted, });
  }

  handleSubmit() {
    var cc = this.refs.country_code.value ?
      this.refs.country_code.value : this.props.cattle.country_code;
    var h = this.refs.herdmark.value ?
      this.refs.herdmark.value : this.props.cattle.herdmark;
    var cd = this.refs.check_digit.value ?
      this.refs.check_digit.value : this.props.cattle.check_digit;
    var idn = this.refs.individual_number.value ?
      this.refs.individual_number.value : this.props.cattle.individual_number;

    this.props.handleUpdateCattle(this.props.cattle.id, {
      country_code: cc,
      herdmark: h,
      check_digit: cd,
      individual_number: idn,
    });

    this.setState({ submitted: false, });
  }

  handleDelete() {
    this.setState({ deleted: !this.state.deleted, });
  }

  confirmDelete() {
    this.props.handleDeleteCattle(this.props.cattle.id);
  }

  renderRef(ref, length, width, ph){
    return (<input ref={ref} className="update-component-input"
      type={ref} maxLength={length} style={{width: width}} placeholder={ph} autoFocus/>);
  }

  renderDelete() {
    return (this.state.deleted) ?
      (<div>
        <br/>
        <div className="cattle-update-delete-component-form">
          <h2>
            Confirm Delete
          </h2>
          Are you sure you want to delete this cattle reference?
          <br/><br/>
          <button
                onClick={ () => this.confirmDelete() } className="update-component-button-delete" >
            Confirm</button>
          <button
                onClick={ () => this.handleDelete() } className="update-component-button" >
            Cancel</button>
            <br/><br/>
        </div>
      </div>)
      :
      (<button
            onClick={ () => this.handleDelete() } className="update-component-button-delete" >
          Delete Cattle</button>);
  }

  render() {
    let {
      country_code,
      herdmark,
      check_digit,
      individual_number,
    } = this.props.cattle;

    return (
      <div className="cattle-update-delete-component-wrapper">
        {this.state.submitted ?
          <div>
          <div className="cattle-update-delete-component-form" >
            <h2>
              Update Cattle
            </h2>
            <div className="row cattle-update-delete-component-data-wrapper" >
            <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-delete-component-data-label">
                  Country Code
                </div>
                {this.renderRef("country_code", 2, "col-lg-8", country_code)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-delete-component-data-label">
                  Herdmark
                </div>
                {this.renderRef("herdmark", 6, "col-lg-8", herdmark)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-delete-component-data-label">
                  Check Digit
                </div>
                {this.renderRef("check_digit", 1, "col-lg-8", check_digit)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-delete-component-data-label">
                  Individual No.
                </div>
                {this.renderRef("individual_number", 5, "col-lg-8", individual_number)}
              </div>
            </div>

            <button
                onClick={ () => this.handleSubmit() } className="update-component-button active" >
              Update</button>
            <button
                onClick={ () => this.handleClick() } className="update-component-button" >
              Cancel</button>
            <br/><br/>
          </div>
          <br/>
          {this.renderDelete()}
          </div>
          :
          <div className="row">
          <button
                onClick={ () => this.handleClick() } className="update-component-button" >
            Update Cattle</button>
          {this.renderDelete()}
          </div>}
        <br/><br/>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleUpdateDeleteComponent);
