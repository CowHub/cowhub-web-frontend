require('./CattleRecognitionComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DropzoneComponent from './DropzoneComponent';

import {
  matchCattleImage,
  fetchCattleMatchResult,
} from '../../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

class CattleRecognitionComponent extends Component {

  static displayName = 'Cattle Recognition Component';
  static propTypes = {
    handleMatchCattleImage: PropTypes.func.isRequired,
    handleFetchCattleMatchResult: PropTypes.func.isRequired
  };

  handleSubmit() {
    dispatch(matchCattleImage(this.state.image));
  }

  fetchMatchResult() {
    dispatch(fetchCattleMatchResult(this.state.matchID));
    setTimeout(() => fetchMatchResult, 3000);
  }

  render() {
    return (
      <div className="cattle-recognition-component-wrapper" >
        <div className="cattle-recognition-component-title" >Find Cattle</div>
        <DropzoneComponent
          onDropAccepted={ (image) => this.setState({ image: image })}
        />
        <button
          onClick={ () => this.props.handleMatchCattleImage() } className="cattle-recognition-component-button-submit" >
          Match
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CattleRecognitionComponent);
