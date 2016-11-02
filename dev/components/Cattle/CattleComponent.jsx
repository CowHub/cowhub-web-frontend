require('./CattleComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCattle } from '../../actions/index';

import CattleListComponent from './CattleListComponent';
import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {
    ...state.cattle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCattle: () => { dispatch(fetchCattle()); },
  };
};

class CattleComponent extends Component {

  static displayName = 'Cattle Component';
  static propTypes = {
    cattle: React.PropTypes.arrayOf(
      React.PropTypes.shape(CattleItemComponent.propTypes)
    ).isRequired,
    fetchCattle: React.PropTypes.func,
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  render() {
    return (
      <CattleListComponent cattle={this.props.cattle} />
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
