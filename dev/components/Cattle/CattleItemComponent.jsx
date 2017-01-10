require('./CattleItemComponent.scss')

import React, { Component, PropTypes } from 'react'

class CattleItemComponent extends Component {

  static propTypes = {
    cattle: PropTypes.object,
    isImageFetching: PropTypes.bool,
    handleSelect: PropTypes.func
  };

  renderImage() {
    let img = this.props.cattle.images;
    let src = img ? (img[0] ? img[0].data : null) : null;
    return (
      <div className='cattleitem-image-wrapper'>
        { this.props.isImageFetching
          ? null //<ProgressCircular indeterminate/>
          : <img className='cattleitem-image' src={ src }/>
        }
      </div>
    );
  };

  renderDetails() {
    return (
      <div className='cattleitem-detail'>
        <div className='cattleitem-field'>
          Country Code: { this.props.cattle.country_code }
        </div>
        <div className='cattleitem-field'>
          Herdmark: { this.props.cattle.herdmark }
        </div>
        <div className='cattleitem-field'>
          Check Digit: { this.props.cattle.check_digit }
        </div>
        <div className='cattleitem-field'>
          Individual Number: { this.props.cattle.individual_number }
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className='cattleitem-wrapper'
        onClick={ () => this.props.handleSelect() }>
        { this.renderImage() }
        { this.renderDetails() }
      </div>
    );
  };
};

export default CattleItemComponent;
