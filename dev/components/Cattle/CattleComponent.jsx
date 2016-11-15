require('./CattleComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  fetchCattle,
  registerCattleEnable,
} from '../../actions/index';

import CattleItemComponent from './CattleItemComponent';
import CattleRegistrationComponent from './CattleRegistrationComponent';
import CattleItemViewUpdateComponent from './CattleItemViewUpdateComponent';

const mapStateToProps = (state) => {
  return {
    cattleSize: state.cattle.cattle.length,
    registering: state.cattle.registering,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCattle: () => { dispatch(fetchCattle()); },
    handleRegisterEnable: () => { dispatch(registerCattleEnable()); },
  };
};

class CattleComponent extends Component {

  static displayName = 'Cattle Component';
  static propTypes = {
    cattleSize: PropTypes.number.isRequired,
    registering: PropTypes.bool.isRequired,
    fetchCattle: PropTypes.func.isRequired,
    handleRegisterEnable: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  renderCattle() {
    let cattle = [];
    if (this.props.cattleSize > 0) {
      let counter = 0;
      while (counter < this.props.cattleSize) {
        cattle.push(<CattleItemViewUpdateComponent key={ counter } id={ counter } />);
        counter += 1;
      }
    }
    return cattle;
  }

  render() {
    return (
      <div className='cattle-component-wrapper' >
        <div className='row' >
          <div className='col-lg-11 cattle-component-title' >
            Cattle
          </div>
          <div className='col-lg-1 cattle-component-buttons' >
            <button aria-hidden='true' className='fa fa-2x fa-plus-square-o'
              onClick={ () => { this.props.handleRegisterEnable(); }} />
          </div>
        </div>
        { this.props.registering && <CattleRegistrationComponent /> }
        { this.props.registering && <hr /> }
        { this.renderCattle() }
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
