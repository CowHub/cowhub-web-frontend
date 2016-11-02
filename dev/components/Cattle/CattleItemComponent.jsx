require('./CattleItemComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
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
  }

  render() {
    return (
      <div>
        Cattle Item
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleItemComponent);
