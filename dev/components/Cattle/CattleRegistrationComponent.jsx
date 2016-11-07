require('./CattleRegistrationComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerCattle } from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {
    ...state.cattle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCattleRegister: (p) => { dispatch(registerCattle(p)) }
  };
};

class CattleRegistrationComponent extends Component {

  static displayName = 'Cattle Register Component';
  static propTypes = {
    breed: React.PropTypes.string,
    check_digit: React.PropTypes.number,
    country_code: React.PropTypes.string,
    dob: React.PropTypes.string,
    gender: React.PropTypes.string,
    herdmark: React.PropTypes.string,
    id: React.PropTypes.number,
    individual_number: React.PropTypes.number,
    name: React.PropTypes.string,
    handleCattleRegister: React.PropTypes.func,
  };

  constructor() {
    super();
    this.state = {
      clicked: false,
    }
  }

  componentWillMount() {
    this.handleRegistered(this.props);
  }

  componentWillReceiveProps(props) {
    this.handleRegistered(props);
  }

  handleRegistered(props) {
    if (props.check_digit && props.country_code && props.herdmark
        && props.individual_number ) {
      console.log('Redirecting... cattle registered.')
      window.location = '/cattle';
    }
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked,});
  }

  handleSubmit() {
    this.props.handleCattleRegister({
      country_code: this.refs.country_code.value,
      herdmark: this.refs.herdmark.value,
      check_digit: this.refs.check_digit.value,
      individual_number: this.refs.individual_number.value,
      name: this.refs.name.value,
      gender: this.refs.gender.value,
      //breed: this.refs.breed.value,
      //dob: this.refs.dob.value,
    })
  }

  renderRef(ref, length, width, req){
    var result;
    if (req) {
      result = (<input ref={ref} className="registeration-component-input"
        type={ref} maxLength={length} style={{width: width}} required autoFocus/>);
    } else {
      result = (<input ref={ref} className="registeration-component-input"
        type={ref} maxLength={length} style={{width: width}} autoFocus/>);
    }
    return result;
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
      <div className="cattle-registration-component-wrapper">
        {this.state.clicked ?
          <form className="cattle-registration-component-form" onSubmit={() => this.handleSubmit()}>
            <h2>Cattle Registration</h2>
              <label className="control-label">Tag *</label>
              {this.renderRef("country_code", 2, 35, true)}
              {this.renderRef("herdmark", 6, 62, true)}
              {this.renderRef("check_digit", 1, 22, true)}
              {this.renderRef("individual_number", 5, 55, true)}
            <div className="name">
              <label className="control-label">Name</label>
              {this.renderRef("name", 60, 500, false)}
            </div>
            <div className="form-group">
            <label className="control-label">Gender</label>
            {this.renderRadio("Female")}
            {this.renderRadio("Male")}
            </div>
            <button
                onClick={ () => this.handleSubmit() } className="registeration-component-button-submit" >
              Submit</button><button
                onClick={ () => this.handleClick() } className="registeration-component-button-submit" >
              Cancel</button>
              <br/><br/>
          </form>
          :
          <button
                onClick={ () => this.handleClick() } className="registeration-component-button-submit" >
            Register Cattle</button> }
        <br/><br/>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleRegistrationComponent);
