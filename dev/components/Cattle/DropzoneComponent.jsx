require('./DropzoneComponent.scss');

import React, { Component, PropTypes } from 'react';

class DropzoneComponent extends Component {

  static propTypes = {
    fileType: PropTypes.string,
    maxSize: PropTypes.number,
    minSize: PropTypes.number,
    onDropAccepted: PropTypes.func,
    onDropRejected: PropTypes.func,
  };

  static defaultProps = {
    fileType: 'image',
    maxSize: 5000000,
    minSize: 0,
    onDropAccepted: (file) => console.log(file),
    onDropRejected: (err) => console.error(err)
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isDragActive: false
    };
  }

  componentDidMount() {
    document.body.onfocus = this.onFileDialogCancel;
  }

  componentWillUnmount() {
    document.body.onfocus = null;
  }

  onDragEnter(e) {
    e.preventDefault();
    this.setState({ isDragActive: true });
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  onDragLeave(e) {
    e.preventDefault();
    this.setState({ isDragActive: false });
  }

  onDrop(e) {
    e.preventDefault();
    this.setState({ isDragActive: false });
    this.handleSelect(e.dataTransfer.files[0]);
  }

  onClick() {
    this.fileInputEl.value = null;
    this.fileInputEl.click();
  }

  handleSelect(file) {
    let error = this.verifyFile(file);
    file.preview = window.URL.createObjectURL(file);
    if (error) {
      this.props.onDropRejected(error);
      return;
    }
    this.props.onDropAccepted(file);
    this.setState({ preview: file.preview });
  }

  verifyFile(file) {
    if (file.type.split('/')[0] != 'image')
      return 'file is not an image'
    if (file.size > this.props.maxSize)
      return 'file too big';
    if (file.size < this.props.minSize)
      return 'file too small'
  }

  render() {
    if (this.props.fileType == 'image' && this.state.preview)
      return (
        <div>
          <img className='dropzone-component-image-preview' src={ this.state.preview }/>
        </div>
      );

    return (
      <div className='dropzone-component-wrapper'>
        <div
          className={ `dropzone-component-dropzone${this.state.isDragActive ? '-active' : ''}` }
          onClick={ () => this.onClick() }
          onDragStart={ (e) => this.onDragStart(e) }
          onDragEnter={ (e) => this.onDragEnter(e) }
          onDragOver={ (e) => this.onDragOver(e) }
          onDragLeave={ (e) => this.onDragLeave(e) }
          onDrop={ (e) => this.onDrop(e) }
        >
          <div className='dropzone-component-notice'>
            + Upload cattle muzzle image.
          </div>
          <input
            type='file'
            className='hidden'
            ref={ (el) => this.fileInputEl = el }
            onChange={ (e) => this.handleSelect(e.target.files[0]) }
          />
        </div>
      </div>
    );
  }
}

export default DropzoneComponent;
