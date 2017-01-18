require('./CattleIndexComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  fetchCattle,
  updateCattle,
  deleteCattle,
  logoutUser,
} from '../../actions';

import HeaderComponent from '../Header/HeaderComponent';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {
    cattle: state.cattle.cattle,
    isFetching: state.cattle.fetching,
    imageFetchingCount: state.cattle.imageFetchingCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCattle: () => dispatch(fetchCattle()),
    updateCattle: (id, params) => dispatch(updateCattle(id, params)),
    deleteCattle: (id) => dispatch(deleteCattle(id)),
    handleLogout: () => dispatch(logoutUser())
  };
};

class CattleIndexComponent extends Component {

  static displayName = 'Cattle Component';
  static propTypes = {
    cattle: PropTypes.arrayOf(PropTypes.object),
    isFetching: PropTypes.bool,
    imageFetchingCount: PropTypes.number,
    fetchCattle: PropTypes.func.isRequired,
    updateCattle: PropTypes.func.isRequired,
    deleteCattle: PropTypes.func.isRequired,
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
        { this.props.cattle.map((cattle, i) => {
          return (
            <CattleItemComponent key={ i }
              cattle={ cattle }
              isImageFetching={ this.props.imageFetchingCount > 0 }
              handleSave={ (params) => this.props.updateCattle(params.id, params) }
              handleDelete={ (id) => this.props.deleteCattle(id) }
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
