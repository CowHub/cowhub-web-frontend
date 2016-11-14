require('./CattleItemComponent.scss');

import React, { Component, PropTypes } from 'react';

const buttonType = {
  editing: {
    style: PropTypes.string,
    text: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  },
  deleting: {
    style: PropTypes.string,
    text: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  },
};

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
  static propTypes = {
    onlyEdit: PropTypes.bool.isRequired,
    onlyDelete: PropTypes.bool.isRequired,
    left: PropTypes.shape(buttonType).isRequired,
    right: PropTypes.shape(buttonType).isRequired,
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
    onlyDelete: false,
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
      editing: false,
      deleting: false,
    };
  }

  handleDeleting() {
    this.setState({
      editing: false,
      deleting: true,
    })
  }

  handleEditing() {
    this.setState({
      editing: true,
      deleting: false,
    })
  }

  handleNoEditingDeleting() {
    this.setState({
      editing: false,
      deleting: false,
    })
  }

  renderRef(value, style = '', ref, length, placeholder) {
    return (this.state.editing)
      ? <div className={ style } >
          <input ref={ ref } className={ 'cattle-item-component-input' } type={ ref }
                 maxLength={ length } placeholder={ placeholder } />
        </div>
      : <div className={ `row ${style}` }>
          <div className='col-lg-4' >
            { placeholder }
          </div>
          <div className='col-lg-8' >
            { value }
          </div>
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

    const styleClassName = (this.props.onlyEdit) ? 'col-lg-12' : 'col-lg-11'
    return (
      <div className='row cattle-item-component-wrapper'>
        <div className={ `${ styleClassName } row cattle-item-component-data-wrapper` } >
          { this.renderRef(country_code, 'col-sm-6', 'country_code', 2, 'Country Code') }
          { this.renderRef(herdmark, 'col-sm-6', 'herdmark', 6, 'Herdmark') }
          { this.renderRef(check_digit, 'col-sm-6', 'check_digit', 1, 'Check Digit') }
          { this.renderRef(individual_number, 'col-sm-6', 'individual_number', 5, 'Individual Number') }
        </div>
        { !this.props.onlyEdit && !this.props.onlyDelete &&
          <div className='col-lg-1 cattle-item-component-button-wrapper-vertical' >
            <button className='fa fa-2x fa-pencil-square-o' onClick={ () => { this.handleEditing(); } } />
            <button className='fa fa-2x fa-trash-o' onClick={ () => { this.handleDeleting(); } } />
          </div>
        }
        { this.state.editing &&
          <div className='row' >
            <div className='col-lg-6' >
              <button className={ this.props.left.editing.style }
                onClick={ () => { this.props.left.editing.func(this.refs, this.props); this.handleNoEditingDeleting(); } } >
                { this.props.left.editing.text }
              </button>
            </div>
            <div className='col-lg-6' >
              <button className={ this.props.right.style }
                onClick={ () => { this.props.right.func(
                  () => { this.handleNoEditingDeleting() }, this.props) } } >
                { this.props.right.text }
              </button>
            </div>
          </div>
        }
        { this.state.deleting &&
          <div className='row' >
            <div className='col-lg-6' >
              <button className={ this.props.left.deleting.style }
                onClick={ () => { this.props.left.deleting.func(this.refs, this.props); } } >
                { this.props.left.deleting.text }
              </button>
            </div>
            <button className={ this.props.right.style }
              onClick={ () => { this.props.right.func(
                () => { this.handleNoEditingDeleting() }, this.props) } } >
              { this.props.right.text }
            </button>
          </div>
        }
      </div>
    );
  }

};

export default CattleItemComponent;
