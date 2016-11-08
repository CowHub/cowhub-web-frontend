require('./CattleRegistrationComponent.scss');

import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';

import { registerCattle } from '../../actions/index';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegisterCattle: (c) => { dispatch(registerCattle(c)) }
  };
};

class CattleRegistrationComponent extends Component {

  static displayName = 'Cattle Register Component';
  static propTypes = {
    handleRegisterCattle: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    const genders = [ 'Male', 'Female' ];
    this.state = {
      gender: genders[0],
      genders
    }
  }

  handleSubmit() {
    this.props.handleRegisterCattle({
      country_code: this.refs.country_code.value,
      herdmark: this.refs.herdmark.value,
      check_digit: this.refs.check_digit.value,
      individual_number: this.refs.individual_number.value,
      // name: this.refs.name.value,
      // gender: this.refs.gender.value,
      //breed: this.refs.breed.value,
      //dob: this.refs.dob.value,
    })
  }

  renderRef(ref, length, style, req) {
    if (!style) style = ""
    return (
      <input ref={ref} className={ `${style} cattle-registration-component-input` }
        type={ref} maxLength={length} />
    );
  }

  render() {
    let {
      gender,
      genders
    } = this.state;

    return (
      <div className="cattle-registration-component-wrapper">
        <h2 className="cattle-registration-component-title" >
          Register Cattle
        </h2>
        <div className="row cattle-registration-component-data-wrapper" >
          <div className="col-lg-4 row">
            <div className="col-lg-4 cattle-registration-component-data-label">
              Country Code
            </div>
            {this.renderRef("country_code", 2, "col-lg-8", true)}
          </div>
          <div className="col-lg-4 row">
            <div className="col-lg-4 cattle-registration-component-data-label">
              Herdmark
            </div>
            {this.renderRef("herdmark", 6, "col-lg-8", true)}
          </div>
          <div className="col-lg-4 row">
            <div className="col-lg-4 cattle-registration-component-data-label">
              Check Digit
            </div>
            {this.renderRef("check_digit", 1, "col-lg-8", true)}
          </div>
          <div className="col-lg-4 row">
            <div className="col-lg-4 cattle-registration-component-data-label">
              Individual No.
            </div>
            {this.renderRef("individual_number", 5, "col-lg-8", true)}
          </div>
          {/* <div className="col-lg-8 row">
            <div className="col-lg-2 cattle-registration-component-data-label">
            Name
            </div>
            {this.renderRef("name", 60, "col-lg-10", false)}
            </div>
          <Dropdown options={genders} value={gender} /> */}
        </div>
        <div className="cattle-registration-component-button-wrapper" >
          <button onClick={ () => { this.handleSubmit() } } >Register</button>
        </div>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleRegistrationComponent);
