require('./SelectComponent.scss')

import React, { Component, PropTypes } from 'react'
import FieldComponent from './FieldComponent'

class SelectComponent extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hidden: PropTypes.bool,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    options: [],
    values: [],
    hidden: false,
    disabled: true,
    handleChange: () => { return },
  };

  renderLabel() {
    let index = this.props.values.indexOf(this.props.value);
    let value = index > -1 ? this.props.options[index] : '';
    return (
      <FieldComponent
        placeholder={ this.props.placeholder }
        value={ value }
        hidden={ this.props.hidden }
        disabled
      />
    );
  }

  renderSelector() {
    return (
      <div className='inputcomponent-input-wrapper'>
        <div className='inputcomponent-input-title'>{ this.props.placeholder }</div>
        <div className='inputcomponent-select-wrapper'>
          <i className='fa fa-chevron-down' aria-hidden='true' disabled/>
          <select
            className='inputcomponent-select-field'
            value={ this.props.value ? this.props.value : '' }
            onChange={ (e) => this.props.handleChange(e.target.value) }
          >
            <option value=''>
              { this.props.placeholder.toLowerCase() }
            </option>
            { this.props.values.map((value, i) => {
              return (
                <option value={ value } key={ i }>
                  { this.props.options[i] }
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.disabled)
      return this.renderLabel();
    return this.renderSelector();
  };
};

export default SelectComponent;
