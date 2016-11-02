require('./CattleListComponent.scss');

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fetchCattle } from '../../actions/index';

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

class CattleListComponent extends Component {

  static displayName = 'Cattle List Component';
  static propTypes = {
    fetchCattle: React.PropTypes.func
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  render() {
    return (
      <div>
        Cattle
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleListComponent);
