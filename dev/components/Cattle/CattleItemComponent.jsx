require('./CattleItemComponent.scss');

import React, { Component, PropTypes, Images } from 'react';
import { connect } from 'react-redux';
import DropzoneComponent from 'react-dropzone';

import {
  editCattleEnable,
  deleteCattleEnable,
  fetchCattleImage,
  uploadImageCattleEnable,
} from '../../actions'

const buttonObject = {
  style: PropTypes.string,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
const buttonTypes = {
  editing: buttonObject,
  deleting: buttonObject,
  uploading: buttonObject,
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.cattle.cattle[ownProps.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditCattleEnable: (id) => { dispatch(editCattleEnable(id)); },
    handleDeleteCattleEnable: (id) => { dispatch(deleteCattleEnable(id)); },
    handleUploadImageCattleEnable: (id) => { dispatch(uploadImageCattleEnable(id)); },
    handleFetchCattleImage: (id) => { dispatch(fetchCattleImage(id)); },
  }
};

class CattleItemComponent extends Component {

  static displayName = 'Cattle Item Component';
  static propTypes = {
    onlyEdit: PropTypes.bool.isRequired,
    onlyDelete: PropTypes.bool.isRequired,
    onlyUpload: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    deleting: PropTypes.bool.isRequired,
    uploading: PropTypes.bool.isRequired,
    left: PropTypes.shape(buttonTypes).isRequired,
    right: PropTypes.shape(buttonTypes).isRequired,
    cattle: PropTypes.shape({
      breed: PropTypes.string,
      check_digit: PropTypes.number.isRequired,
      country_code: PropTypes.string.isRequired,
      dob: PropTypes.string,
      gender: PropTypes.string,
      herdmark: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      individual_number: PropTypes.number.isRequired,
      name: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    index: PropTypes.number,
    toUpload: PropTypes.arrayOf(PropTypes.object),
    handleEditCattleEnable: PropTypes.func.isRequired,
    handleDeleteCattleEnable: PropTypes.func.isRequired,
    handleUploadImageCattleEnable: PropTypes.func.isRequired,
    handleFetchCattleImage: PropTypes.func.isRequired,
  };
  static defaultProps = {
    onlyEdit: false,
    onlyDelete: false,
    onlyUpload: false,
    editing: false,
    deleting: false,
    image: false,
    toUpload: [],
    cattle: {
      id: -1,
      check_digit: -1,
      country_code: '',
      herdmark: '',
      individual_number: -1,
    },
  };

  componentWillMount() {
    this.props.cattle.id !== -1 && this.props.handleFetchCattleImage(this.props.cattle.id);
  }

  imagesToUpload(images) {
    console.log(images);
    images.map((i) => {
      const promise = new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsDataURL(i)

        reader.onload = () => {
          if (!!reader.result) {
            resolve(reader.result)
          }
          else {
            reject(Error("Failed converting to base64"))
          }
        }

      })
      promise.then(result => {
        this.props.toUpload.push(result);
      }, err => {
        console.log(err)
      })
    })

  }

  renderUpload(){
    return (<div className='cattle-item-component-dropzone' >
      <DropzoneComponent
        ref={'image'}
        onDrop={ (images) => { this.imagesToUpload(images); } }>
        <div>
          Drop or click to upload for an image of a cattle muzzle
        </div>
      </DropzoneComponent>
    </div>);
  }

  renderRef(value, style = '', ref, length, placeholder) {
    return (this.props.editing || this.props.onlyEdit)
      ? <div className={ style } >
          <input ref={ ref } className={ 'cattle-item-component-input' } type={ ref }
                 maxLength={ length } placeholder={ placeholder }
                 defaultValue={ value && value != -1 ? value : '' } />
        </div>
      : <div className={ `row ${style}` }>
          <div className='col-xs-6 col-sm-5' >
            { placeholder }
          </div>
          <div className='col-xs-6 col-sm-7' >
            { value }
          </div>
        </div>;
  }

  renderImage(style=''){
    return (
      <div className={style}>
        <Image id="image" source={{uri: this.props.cattle.images[this.props.index]}}/>
      </div>
    )
  }

  renderDisplay(style =''){
    const {
      country_code,
      herdmark,
      check_digit,
      id,
      individual_number,
      name,
      images,
    } = this.props.cattle;
    const {
      onlyEdit
    } = this.props;

    const styleClassNameImage = images && images.length > 0 ? 'col-sm-2' : '';
    const styleClassNameRef = images && !images.length || onlyEdit ? 'col-sm-6' : 'col-sm-5';

    console.log(images);
    return (!this.props.uploading)
      ? <div className={ style }>
        { images && images.length > 0
                 && this.renderImage(styleClassNameImage)
        }
        { this.renderRef(country_code, `${styleClassNameRef} cattle-item-component-data-value`,
                         'country_code', 2, 'Country Code')
        }
        { this.renderRef(herdmark, `${styleClassNameRef} cattle-item-component-data-value`,
                         'herdmark', 6, 'Herdmark')
        }
        { this.renderRef(check_digit, `${styleClassNameRef} cattle-item-component-data-value`,
                         'check_digit', 1, 'Check Digit')
        }
        { this.renderRef(individual_number, `${styleClassNameRef} cattle-item-component-data-value`,
                         'individual_number', 5, 'Individual Number')
        }
      </div> : <div className={ style }>
        { this.renderUpload() }
      </div>;
  }

  render() {
    const {
      country_code,
      herdmark,
      check_digit,
      id,
      individual_number,
      name,
      images,
    } = this.props.cattle;
    const {
      onlyEdit,
      onlyDelete,
      onlyUpload,
      editing,
      deleting,
      uploading,
    } = this.props;

    const styleClassName = showButtons ? 'col-xsnull0 col-sm-11' : 'col-xs-12'
    const styleClassNameImage = images && images.length > 0 ? 'col-sm-2' : '';
    const styleClassNameRef = images && !images.length ? 'col-sm-6' : 'col-sm-5';
    const styleClassNameButtons = showButtons ? 'col-xs-10 col-sm-11' : 'col-xs-12';
    const showButtons = !onlyEdit && !onlyDelete  && !onlyUpload
                     && !editing && !deleting && !uploading;
    const styleClassNameButtons = showButtons ? 'col-xs-10 col-sm-11' : 'col-xs-12';
    const wrapper = !uploading ? 'cattle-item-component-data-wrapper' : 'cattle-item-component-dropzone-wrapper'
    return (
      <div className='row cattle-item-component-wrapper'>
        { this.renderDisplay(`${styleClassNameButtons} row ${wrapper}`) }

        { showButtons &&
          <div className='col-xs-2 col-sm-1 cattle-item-component-button-wrapper-vertical' >
            <button className='cattle-item-component-button-item fa fa-2x fa-pencil-square-o' onClick={ () => { this.props.handleEditCattleEnable(id); } } />
            <button className='cattle-item-component-button-item fa fa-2x fa-trash-o' onClick={ () => { this.props.handleDeleteCattleEnable(id); } } />
            <button className='cattle-item-component-button-item fa fa-2x fa-picture-o' onClick={ () => { this.props.handleUploadImageCattleEnable(id); } } />
          </div>
        }
        { (editing || onlyEdit) &&
          <div className='col-xs-6' >
            <button className={ this.props.left.editing.style }
              onClick={ () => { this.props.left.editing.func(this.refs, this.props); } } >
              { this.props.left.editing.text }
            </button>
          </div>
        }
        { (editing || onlyEdit) &&
          <div className='col-xs-6' >
            <button className={ this.props.right.editing.style }
              onClick={ () => { this.props.right.editing.func(this.refs, this.props) } } >
              { this.props.right.editing.text }
            </button>
          </div>
        }
        { (deleting || onlyDelete) &&
          <div className='col-xs-6' >
            <button className={ this.props.left.deleting.style }
              onClick={ () => { this.props.left.deleting.func(this.refs, this.props); } } >
              { this.props.left.deleting.text }
            </button>
          </div>
        }
        { (deleting || onlyDelete) &&
          <div className='col-xs-6' >
            <button className={ this.props.right.deleting.style }
              onClick={ () => { this.props.right.deleting.func(this.refs, this.props) } } >
              { this.props.right.deleting.text }
            </button>
          </div>
        }
        { (uploading || onlyUpload) &&
          <div className='col-xs-6' >
            <button className={ this.props.left.uploading.style }
              onClick={ () => { this.props.left.uploading.func(this.refs, this.props); } } >
              { this.props.left.uploading.text }
            </button>
          </div>
        }
        { (uploading || onlyUpload) &&
          <div className='col-xs-6' >
            <button className={ this.props.right.uploading.style }
              onClick={ () => { this.props.right.uploading.func(this.refs, this.props); } } >
              { this.props.right.uploading.text }
            </button>
          </div>
        }
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(CattleItemComponent);
