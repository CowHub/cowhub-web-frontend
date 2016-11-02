require('./CattleListComponent.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CattleItemComponent from './CattleItemComponent';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class CattleListComponent extends Component {

  static displayName = 'Cattle List Component';
  static propTypes = {
    cattle: React.PropTypes.arrayOf(
      React.PropTypes.shape(CattleItemComponent.propTypes)
    ).isRequired,
  };

  render() {
    return (
      <div className='cattle-list-component-wrapper' >
        { this.props.cattle.map((cattle) => {
          return (
            <CattleItemComponent key={ cattle.id } { ...cattle } />
          );
        })}
      </div>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleListComponent);
