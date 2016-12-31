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
    handleUploadImages: (image) => dispatch(matchCattleImage(image)),
    handleGetMatch: (image) => console.dir(image)
  };
}

class CattleRecognitionComponent extends Component {

  static displayName = 'Cattle Recognition Component';
  static propTypes = {
    cattle: PropTypes.arrayOf(
      PropTypes.shape({
        breed: PropTypes.string,
        check_digit: PropTypes.number.isRequired,
        country_code: PropTypes.string.isRequired,
        dob: PropTypes.string,
        gender: PropTypes.string,
        herdmark: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        individual_number: PropTypes.number.isRequired,
        name: PropTypes.string,
      }).isRequired
    ),
    handleUploadImages: PropTypes.func.isRequired,
    handleGetMatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='cattle-recognition-component-wrapper' >
        <div className='cattle-recognition-component-title' >
          Identify Cattle
        </div>
        <div className='cattle-recognition-component-dropzone' >
          <DropzoneComponent
            onDrop={ (images) => this.props.handleUploadImages({images}) } >
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
