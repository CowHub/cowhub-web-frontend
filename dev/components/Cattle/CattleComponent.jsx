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
    ids: state.cattle.cattle.map(c => c.cattle.id),
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
    ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    registering: PropTypes.bool.isRequired,
    fetchCattle: PropTypes.func.isRequired,
    handleRegisterEnable: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  render() {
    return (
      <div className='cattle-component-wrapper' >
        <div className='row' >
          <div className='col-lg-11 cattle-component-title' >
            Cattle
          </div>
          <button aria-hidden='true' className='col-lg-1 fa fa-2x fa-plus-square-o'
            onClick={ () => { this.props.handleRegisterEnable(); }} />
        </div>
        { this.props.registering && <CattleRegistrationComponent /> }
        { this.props.registering && <hr /> }
        { this.props.ids.map(id => <CattleItemViewUpdateComponent key={ id } id={ id } /> ) }
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
