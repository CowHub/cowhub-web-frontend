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
    cattle: React.PropTypes.arrayOf(
      React.PropTypes.shape(CattleItemComponent.propTypes.cattle)
    ).isRequired,
    fetchCattle: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      registering: false,
    };
  }

  componentWillMount() {
    this.props.fetchCattle();
  }

  handleRegisterEnable() {
    this.setState({
      registering: true,
    })
  }

  handleRegisterDisable() {
    this.setState({
      registering: false,
    })
  }

  render() {
    return (
      <div className='cattle-component-wrapper' >
        <div className='row' >
          <div className='col-lg-11 cattle-component-title' >
            Cattle
          </div>
          <button aria-hidden='true' className='col-lg-1 fa fa-2x fa-plus-square-o'
            onClick={ () => { this.handleRegisterEnable(); }} />
        </div>
        { this.state.registering &&
          <CattleRegistrationComponent cancel={ () => { this.handleRegisterDisable(); } } />
        }
        { this.props.cattle.map((item) =>
            <CattleItemViewUpdateComponent
              key={ item.cattle.id }
              { ...item } />
        )}
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleComponent);
