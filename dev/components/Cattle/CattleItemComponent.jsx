require('./CattleItemComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  editCattleEnable,
  deleteCattleEnable,
} from '../../actions'

const buttonObject = {
  style: PropTypes.string,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
const buttonTypes = {
  editing: buttonObject,
  deleting: buttonObject,
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.cattle.cattle[ownProps.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditCattleEnable: (id) => { dispatch(editCattleEnable(id)); },
    handleDeleteCattleEnable: (id) => { dispatch(deleteCattleEnable(id)); },
  }
};

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
  static propTypes = {
    onlyEdit: PropTypes.bool.isRequired,
    onlyDelete: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    deleting: PropTypes.bool.isRequired,
    left: PropTypes.shape(buttonTypes).isRequired,
    right: PropTypes.shape(buttonTypes).isRequired,
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
    handleEditCattleEnable: PropTypes.func.isRequired,
    handleDeleteCattleEnable: PropTypes.func.isRequired,
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

  renderRef(value, style = '', ref, length, placeholder) {
    return (this.props.editing || this.props.onlyEdit)
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
    const {
      country_code,
      herdmark,
      check_digit,
      id,
      individual_number,
      name,
    } = this.props.cattle;
    const {
      onlyEdit,
      onlyDelete,
      editing,
      deleting,
    } = this.props;

    const styleClassName = (this.props.onlyEdit) ? 'col-lg-12' : 'col-lg-11'
    return (
      <div className='row cattle-item-component-wrapper'>
        <div className={ `${ styleClassName } row cattle-item-component-data-wrapper` } >
          { this.renderRef(country_code, 'col-sm-6', 'country_code', 2, 'Country Code') }
          { this.renderRef(herdmark, 'col-sm-6', 'herdmark', 6, 'Herdmark') }
          { this.renderRef(check_digit, 'col-sm-6', 'check_digit', 1, 'Check Digit') }
          { this.renderRef(individual_number, 'col-sm-6', 'individual_number', 5, 'Individual Number') }
        </div>
        { !onlyEdit && !onlyDelete &&
          <div className='col-lg-1 cattle-item-component-button-wrapper-vertical' >
            <button className='fa fa-2x fa-pencil-square-o' onClick={ () => { this.props.handleEditCattleEnable(id); } } />
            <button className='fa fa-2x fa-trash-o' onClick={ () => { this.props.handleDeleteCattleEnable(id); } } />
          </div>
        }
        { (editing || onlyEdit) &&
          <div className='row' >
            <div className='col-lg-6 cattle-item-component-edit-delete' >
              <button className={ this.props.left.editing.style }
                onClick={ () => { this.props.left.editing.func(this.refs, this.props); } } >
                { this.props.left.editing.text }
              </button>
            </div>
            <div className='col-lg-6 cattle-item-component-edit-delete' >
              <button className={ this.props.right.editing.style }
                onClick={ () => { this.props.right.editing.func(this.refs, this.props) } } >
                { this.props.right.editing.text }
              </button>
            </div>
          </div>
        }
        { (deleting || onlyDelete) &&
          <div className='row' >
            <div className='col-lg-6 cattle-item-component-edit-delete' >
              <button className={ this.props.left.deleting.style }
                onClick={ () => { this.props.left.deleting.func(this.refs, this.props); } } >
                { this.props.left.deleting.text }
              </button>
            </div>
            <div className='col-lg-6 cattle-item-component-edit-delete' >
              <button className={ this.props.right.deleting.style }
                onClick={ () => { this.props.right.func(this.refs, this.props) } } >
                { this.props.right.deleting.text }
              </button>
            </div>
          </div>
        }
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleItemComponent);
