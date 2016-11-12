require('./CattleItemComponent.scss');

import React, { Component, PropTypes } from 'react';

import CattleUpdateDeleteComponent from './CattleUpdateDeleteComponent'

const buttonType = {
  style: PropTypes.string,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
}

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
  static propTypes = {
    onlyEdit: PropTypes.bool.isRequired,
    left: PropTypes.shape(buttonType),
    right: PropTypes.shape(buttonType),
    cattle: PropTypes.shape({
      breed: PropTypes.string,
      check_digit: PropTypes.number.isRequired,
      country_code: PropTypes.string.isRequired,
      dob: PropTypes.string,
      gender: PropTypes.string,
      herdmark: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      individual_number: PropTypes.number.isRequired,
      name: PropTypes.string,
    }).isRequired,
  };
  static defaultProps = {
    onlyEdit: false,
    cattle: {
      id: -1,
      check_digit: -1,
      country_code: '',
      herdmark: '',
      individual_number: -1,
    }
  };

  constructor(props) {
    super(props)
    this.state = {
      edit: false,
    };
  }

  renderRef(value, style = '', ref, length, placeholder) {
    return (this.state.edit)
      ? <div className={ style } >
          <input ref={ ref } className={ 'cattle-item-component-input' } type={ ref }
                 maxLength={ length } placeholder={ placeholder } />
        </div>
      : <div className={ style }>
          { `${placeholder} ${value}` }
        </div>
  }

  render() {
    let {
      country_code,
      herdmark,
      check_digit,
      id,
      individual_number,
      name,
    } = this.props.cattle;

    return (
      <div className='row cattle-item-component-wrapper' >
        { this.renderRef(country_code, 'col-sm-6', 'country_code', 20, 'Country Code') }
        { this.renderRef(herdmark, 'col-sm-6', 'herdmark', 20, 'Herdmark') }
        { this.renderRef(check_digit, 'col-sm-6', 'check_digit', 20, 'Check Digit') }
        { this.renderRef(individual_number, 'col-sm-6', 'individual_number', 20, 'Individual Number') }
      </div>
    );
  }

};

export default CattleItemComponent;
