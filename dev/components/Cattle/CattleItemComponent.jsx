require('./CattleItemComponent.scss');

import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     cattle: state.cattle[ownProps.id],
//   }
// }

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
  static propTypes = {
    expandCattleToggle: React.PropTypes.func,
    expanded: React.PropTypes.bool,
    cattle: React.PropTypes.shape({
      breed: React.PropTypes.string,
      check_digit: React.PropTypes.number.isRequired,
      country_code: React.PropTypes.string.isRequired,
      dob: React.PropTypes.string,
      gender: React.PropTypes.string,
      herdmark: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
      individual_number: React.PropTypes.number.isRequired,
      name: React.PropTypes.string,
    }),
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
    let {
      expanded
    } = this.props;

    return (
      <div className='row cattle-item-component-wrapper' >
        <div onClick={ () => { this.props.expandCattleToggle(id); } } >
          <div className='col-md-4 col-xs-5 cattle-item-component-tag'>
            { `${country_code}${herdmark}${check_digit}${individual_number}` }
          </div>
          <div className='col-md-4 col-xs-7 cattle-item-component-name'>
            { name && `${name}` }
          </div>
        </div>
        { expanded &&
          <div className='col-xs-12' >
            Expanded
          </div>
        }
      </div>
    );
  }

};

export default CattleItemComponent;
