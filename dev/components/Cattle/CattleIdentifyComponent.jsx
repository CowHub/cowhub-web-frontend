require('./CattleIdentifyComponent.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DropzoneComponent from 'react-dropzone';

import {
  matchCattleImage,
  fetchCattleMatchResult,
} from '../../actions';

const mapStateToProps = (state) => {
  return {
    ...state.identification
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUploadImage: (image) => { dispatch(matchCattleImage(image)); },
    handleGetMatch: () => { console.log('Retrieving match'); }
  };
}

class CattleRecognitionComponent extends Component {

  static displayName = 'Cattle Recognition Component';
  static propTypes = {
    match: PropTypes.object,
    handleUploadImage: PropTypes.func.isRequired,
    handleGetMatch: PropTypes.func.isRequired,
  };

  handleGetMatch() {
    // while (!this.props.match) {
    //
    // }
    this.props.handleGetMatch();
  }

  render() {
    return (
      <div className='cattle-recognition-component-wrapper' >
        <div className='cattle-recognition-component-title' >
          Identify Cattle
        </div>
        <div className='cattle-recognition-component-dropzone' >
          <DropzoneComponent
            onDrop={ (image) => this.handleUploadImage(image, this.handleGetMatch()) } >
            <div>
              Drop or click to browse for an image of a cattle muzzle
            </div>
          </DropzoneComponent>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CattleRecognitionComponent);
