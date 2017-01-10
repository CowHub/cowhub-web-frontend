require('./CattleIndexComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  fetchCattle,
  logoutUser,
} from '../../actions';

import HeaderComponent from '../Header/HeaderComponent';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {
    cattle: state.cattle.cattle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCattle: () => dispatch(fetchCattle()),
    handleLogout: () => dispatch(logoutUser())
  };
};

class CattleIndexComponent extends Component {

  static displayName = 'Cattle Component';
  static propTypes = {
    cattle: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
    isImageFetching: PropTypes.bool,
    fetchCattle: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchCattle();
  }

  renderHeader() {
    let links = [
      {
        title: 'Sign Out',
        method: () => this.props.handleLogout()
      }
    ];
    return (
      <HeaderComponent
        links={ links }
      />
    );
  };

  renderCattle() {
    return (
      <div className='herdpage-cattle-wrapper'>
        { this.props.cattle.map((c, i) => {
          return (
            <CattleItemComponent key={ i } cattle={ c }
              isImageFetching={ this.props.isImageFetching }
              handleSelect={ () => console.log(c) }
                //this.props.handleShow(i) }
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <div className='herdpage-wrapper' >
          { this.renderCattle() }
        </div>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CattleIndexComponent);
