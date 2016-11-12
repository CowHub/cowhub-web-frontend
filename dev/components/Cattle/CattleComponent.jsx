require('./CattleComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchCattle,
} from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';
import CattleRegistrationComponent from './CattleRegistrationComponent';
import CattleItemViewUpdateComponent from './CattleItemViewUpdateComponent';

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
    addCattle: React.PropTypes.bool.isRequired,
    cattle: React.PropTypes.arrayOf(
      React.PropTypes.shape(CattleItemComponent.propTypes.cattle)
    ).isRequired,
    fetchCattle: React.PropTypes.func.isRequired,
  };
  static defaultProps = {
    addCattle: true
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
        <h2 className='cattle-list-component-title' >
          Cattle
        </h2>
        { this.props.addCattle && <CattleRegistrationComponent/> }
        { cattle.map((item) =>
            <CattleItemViewUpdateComponent
              key={ item.cattle.id }
              { ...item } />
        )}
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
