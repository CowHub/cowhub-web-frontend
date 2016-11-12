require('./CattleComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchCattle,
} from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';
import CattleRegistrationComponent from './CattleRegistrationComponent';

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
      React.PropTypes.shape(CattleItemComponent.propTypes.cattle)
    ).isRequired,
    fetchCattle: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  render() {
    let {
      cattle,
    } = this.props;

    return (
      <div className='cattle-list-component-wrapper' >
        <CattleRegistrationComponent/>
        <h2 className='cattle-list-component-title' >
          Registered Cattle
        </h2>
        { cattle.map((item) =>
            <CattleItemComponent
              key={ item.cattle.id }
              { ...item } />
        )}
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
