require('./FieldComponent.scss')

import React, { Component, PropTypes } from 'react'

class FieldComponent extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hidden: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    handleChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    hidden: false,
    disabled: true,
    maxLength: 0,
    minLength: 20,
    handleChange: () => { return },
  };

  render() {
    if ((this.props.hidden || !this.props.value) && this.props.disabled)
      return <div className='inputcomponent-input-wrapper'/>;

    return (
      <div className='inputcomponent-input-wrapper'>
        <div className='inputcomponent-input-title'>{ this.props.placeholder }</div>
        <input className='inputcomponent-input-field'
          maxLength={ this.props.maxLength } minLength={ this.props.minLength }
          value={ this.props.value ? this.props.value : '' }
          onChange={ (e) => this.props.handleChange(e.target.value) }
          disabled={ this.props.disabled }
        />
      </div>
    );
  };
};

export default FieldComponent;
