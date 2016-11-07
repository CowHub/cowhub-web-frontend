require('./CattleComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  expandCattleToggle,
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
    expandCattleToggle: (id) => { dispatch(expandCattleToggle(id)); },
    fetchCattle: () => { dispatch(fetchCattle()); },
  };
};

class CattleComponent extends Component {

  static displayName = 'Cattle Component';
  static propTypes = {
    cattle: React.PropTypes.arrayOf(
      React.PropTypes.shape(CattleItemComponent.propTypes.cattle)
    ).isRequired,
    fetchCattle: React.PropTypes.func,
    expandCattleToggle: React.PropTypes.func,
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  render() {
    let {
      cattle,
      expandCattleToggle,
    } = this.props;

    return (
      <div className='cattle-list-component-wrapper' >
        <h2 className='cattle-list-component-title' >
          Registered Cattle
        </h2>
        { cattle.map((item) => {
          return (
            <div>
              <CattleRegistrationComponent/>
              <CattleItemComponent
                key={ item.cattle.id }
                expandCattleToggle={ () => expandCattleToggle(item.cattle.id) }
                { ...item } />
            </div>
          );
        })}
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
