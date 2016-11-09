require('./CattleUpdateComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCattle } from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateCattle: (id, p) => { dispatch(updateCattle(id, p)) }
  };
};

class CattleUpdateComponent extends Component {

  static displayName = 'Cattle Update Component';
  static propTypes = {
    breed: React.PropTypes.string,
    check_digit: React.PropTypes.number.isRequired,
    country_code: React.PropTypes.string.isRequired,
    dob: React.PropTypes.string,
    gender: React.PropTypes.string,
    herdmark: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    individual_number: React.PropTypes.number.isRequired,
    name: React.PropTypes.string,
    handleUpdateCattle: React.PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      clicked: false,
    }
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked,});
  }

  handleSubmit() {
    var cc = this.refs.country_code.value ?
      this.refs.country_code.value : this.props.country_code;
    var h = this.refs.herdmark.value ?
      this.refs.herdmark.value : this.props.herdmark;
    var cd = this.refs.check_digit.value ?
      this.refs.check_digit.value : this.props.check_digit;
    var idn = this.refs.individual_number.value ?
      this.refs.individual_number.value : this.props.individual_number;

    this.props.handleUpdateCattle(this.props.id, {
      country_code: cc,
      herdmark: h,
      check_digit: cd,
      individual_number: idn,
    })
  }

  renderRef(ref, length, width){
    return (<input ref={ref} className="update-component-input"
      type={ref} maxLength={length} style={{width: width}} autoFocus/>);
  }

  renderRadio(value){
    return (
      <span>
        <input style={{marginLeft: 10}} type="radio" ref="gender"
          value={value}/>
          {value}
      </span>
    );
  }

  render() {
    return (
      <div className="cattle-update-component-wrapper">
        {this.state.clicked ?
          <div className="cattle-update-component-form" >
            <h2>
              Update Cattle
            </h2>
            <div className="row cattle-update-component-data-wrapper" >
            <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-component-data-label">
                  Country Code
                </div>
                {this.renderRef("country_code", 2, "col-lg-8", true)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-component-data-label">
                  Herdmark
                </div>
                {this.renderRef("herdmark", 6, "col-lg-8", true)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-component-data-label">
                  Check Digit
                </div>
                {this.renderRef("check_digit", 1, "col-lg-8", true)}
              </div>
              <div className="col-lg-5 row">
                <div className="col-lg-5 cattle-update-component-data-label">
                  Individual No.
                </div>
                {this.renderRef("individual_number", 5, "col-lg-8", true)}
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
          :
          <button
                onClick={ () => this.handleClick() } className="update-component-button" >
            Update Cattle</button> }
        <br/><br/>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleUpdateComponent);
