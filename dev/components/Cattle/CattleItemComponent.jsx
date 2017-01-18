require('./CattleItemComponent.scss')

import React, { Component, PropTypes } from 'react'
import FieldComponent from '../Input/FieldComponent'
import SelectComponent from '../Input/SelectComponent'

class CattleItemComponent extends Component {

  static propTypes = {
    cattle: PropTypes.object,
    isImageFetching: PropTypes.bool,
    handleSave: PropTypes.func,
    handleDelete: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      cattle: JSON.parse(JSON.stringify(props.cattle)),
      expanded: false,
      editing: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ cattle: JSON.parse(JSON.stringify(props.cattle))});
  }

  handleChange(key, value) {
    let cattle = this.state.cattle;
    cattle[key] = value;
    this.setState({ cattle: cattle });
  }

  renderImage() {
    let img = this.props.cattle.images;
    let src = img ? (img[0] ? img[0].data : null) : null;
    return (
      <div className='cattleitem-image-wrapper'>
        { this.props.isImageFetching ? null : src
          ? <img className='cattleitem-image' src={ src }/>
          : <img className='cattleitem-default-image' src={ require('../../assets/images/CowHub-logo.png') }/>
        }
      </div>
    );
  };

  renderCountryCode() {
    return (
      <FieldComponent
        placeholder='Country Code'
        value={ this.state.cattle.country_code }
        disabled={ !this.state.editing }
        maxLength={ 2 } minLength={ 2 }
        handleChange={ (value) => this.handleChange('country_code', value) }
      />
    );
  };

  renderHerdmark() {
    return (
      <FieldComponent
        placeholder='Herdmark'
        value={ this.state.cattle.herdmark }
        disabled={ !this.state.editing }
        maxLength={ 6 } minLength={ 6 }
        handleChange={ (value) => this.handleChange('herdmark', value) }
      />
    );
  };

  renderCheckDigit() {
    return (
      <FieldComponent
        placeholder='Check Digit'
        value={ this.state.cattle.check_digit }
        disabled={ !this.state.editing }
        maxLength={ 1 } minLength={ 1 }
        handleChange={ (value) => this.handleChange('check_digit', value) }
      />
    );
  };

  renderIndividualNumber() {
    return (
      <FieldComponent
        placeholder='Individual Number'
        value={ this.state.cattle.individual_number }
        disabled={ !this.state.editing }
        maxLength={ 5 } minLength={ 1 }
        handleChange={ (value) => this.handleChange('individual_number', value) }
      />
    );
  };

  renderGender() {
    return (
      <SelectComponent
        placeholder='Gender'
        value={ this.state.cattle.gender }
        hidden={ !this.state.expanded }
        disabled={ !this.state.editing }
        options={ genders }
        values={ genders }
        handleChange={ (value) => this.handleChange('gender', value) }
      />
    );
  };

  renderBreed() {
    return (
      <SelectComponent
        placeholder='Breed'
        value={ this.state.cattle.breed }
        hidden={ !this.state.expanded }
        disabled={ !this.state.editing }
        options={ breeds }
        values={ breed_codes }
        handleChange={ (value) => this.handleChange('breed', value) }
      />
    );
  };

  renderGeneticDam() {
    return (
      <FieldComponent
        placeholder='Genetic Dam'
        value={ this.state.cattle.genetic_dam }
        hidden={ !this.state.expanded }
        disabled={ !this.state.editing }
        maxLength={ 14 } minLength={ 14 }
        handleChange={ (value) => this.handleChange('genetic_dam', value) }
      />
    );
  }

  renderSurrogateDam() {
    return (
      <FieldComponent
        placeholder='Surrogate Dam'
        value={ this.state.cattle.surrogate_dam }
        hidden={ !this.state.expanded }
        disabled={ !this.state.editing }
        maxLength={ 14 } minLength={ 14 }
        handleChange={ (value) => this.handleChange('surrogate_dam', value) }
      />
    );
  }

  renderSirDam() {
    return (
      <FieldComponent
        placeholder='Sir Dam'
        value={ this.state.cattle.sir_dam }
        hidden={ !this.state.expanded }
        disabled={ !this.state.editing }
        maxLength={ 14 } minLength={ 14 }
        handleChange={ (value) => this.handleChange('sir_dam', value) }
      />
    );
  }

  renderDetails() {
    return (
      <div className='cattleitem-detail'>
        { this.renderCountryCode() }
        { this.renderHerdmark() }
        { this.renderCheckDigit() }
        { this.renderIndividualNumber() }
        { this.renderBreed() }
        { this.renderGender() }
        { this.renderGeneticDam() }
        { this.renderSurrogateDam() }
        { this.renderSirDam() }
      </div>
    );
  };

  renderShowButton() {
    if (!this.state.editing)
      return (
        <div className='cattleitem-show-button-wrapper'>
          <i
            className={ `cattleitem-show-button fa fa-chevron-${
              this.state.expanded ? 'up' : 'down' }` }
            onClick={ () => this.setState({ expanded: !this.state.expanded }) }
            aria-hidden='true'
          />
        </div>
      );
  }

  renderEditButton() {
    if (!this.state.editing)
      return (
        <div className='cattleitem-edit-button-wrapper'>
          <i
            className='fa fa-pencil-square cattleitem-edit-button'
            onClick={ () => this.setState({ editing: true, expanded: true }) }
            aria-hidden='true'
          />
        </div>
      );
  }

  renderButtons() {
    if (this.state.editing)
      return (
        <div className='cattleitem-buttons-wrapper'>
          <button
            className='cattleitem-save-button'
            onClick={ () => {
              this.props.handleSave(this.state.cattle);
              this.setState({ editing: false });
            }}
          >
            Save
          </button>
          <button
            className='cattleitem-cancel-button'
            onClick={ () => this.setState({ editing: false,
              cattle: JSON.parse(JSON.stringify(this.props.cattle)) }) }
          >
            Cancel
          </button>
          <button
            className='cattleitem-remove-button'
            onClick={ () => this.props.handleDelete(this.state.cattle.id) }
          >
            Delete
          </button>
        </div>
      );
  };

  render() {
    return (
      <div className='cattleitem-wrapper'>
        { this.renderEditButton() }
        { this.renderImage() }
        { this.renderDetails() }
        { this.renderShowButton() }
        { this.renderButtons() }
      </div>
    );
  };
};

const genders = ['male', 'female'];

const breeds = [
  'Aberdeen Angus', 'Abondance', 'Australian Lowline', 'Angler Rotvieh', 'Ankole',
  'Armoricaine', 'Aubrac', 'Ayrshire', 'Baltata Romaneasca', 'Bazadaise', 'Beefalo',
  'Beef Shorthorn', 'Belted Dutch', 'Belted Galloway', 'Belted Welsh Black', 'Bison',
  'Blonde D’Aquitaine', 'Blue Albion', 'Blue Grey', 'Brahman', 'Bretonne Pie-Noire',
  'British Blue', 'British Friesian', 'British White', 'Brown Swiss', 'Charolais',
  'Chianina', 'Chillingham', 'Coloured Welsh', 'Danish Red', 'Dairy Shorthorn',
  'Devon', 'Dexter', 'Dwarf Zebu', 'East Finnish Brown', 'English Park', 'Estonian Red',
  'Flekvieh', 'Frisona Espagnola', 'Gasconne', 'Galloway', 'Gayal', 'Gelbvieh',
  'Gloucester', 'Groninger Blaarkop', 'Guernsey', 'Heck', 'Hereford', 'Highland',
  'Holstein', 'Holstein Friesian', 'Hungarian Steppe', 'Irish Moiled', 'Jersey',
  'Kerry', 'Kiwi', 'Lakenvelder', 'Limousin', 'Lincoln Red', 'Longhorn', 'Luing',
  'Maine Anjou', 'Malkekorthorn', 'Marchigiana', 'Meuse Rhine Issel', 'Montbeliarde',
  'Murray Grey', 'Normande', 'Northern Dairy Shorthorn', 'Norwegian Red', 'Old English',
  'Other Dairy', 'Parthenais', 'Piemontese', 'Pinzgauer', 'Red Poll', 'Reggiana',
  'Riggit Galloway', 'Romagnola', 'Rotebunde', 'Salers', 'Shetland', 'Shorthorn',
  'Simmental', 'South Devon', 'Speckle Park', 'Stabiliser', 'Swedish Red', 'Swedish Red Polled',
  'Swedish Red and White', 'Swiss Braunvieh', 'Swiss Orig Braunvieh', 'Swiss Grey',
  'Sussex', 'Tyrone Black', 'Tarantaise-Tarina', 'Valdostana Nera', 'Vaynol', 'Wagyu',
  'Water Buffalo', 'Welsh Black', 'Welsh White', 'White Galloway', 'Whitebred Shorthorn',
  'White Park', 'Yak', 'Zebu'
];

const breed_codes = [
  'AA', 'AB', 'ALL', 'AR', 'AN', 'AM', 'AU', 'AY', 'BRO', 'BAZ', 'BEL', 'BSH', 'BD',
  'BG', 'BWB', 'BI', 'BA', 'BAL', 'BL', 'G', 'BR', 'BP', 'BRB', 'BF', 'BW', 'BS',
  'CH', 'CHI', 'CHL', 'CW', 'DR', 'DS', 'DEV', 'DEX', 'DZE', 'EFB', 'EP', 'ER',
  'FKV', 'FE', 'GAS', 'GA', 'GAY', 'GE', 'GL', 'GB', 'GU', 'HK', 'HE', 'HI', 'HO',
  'HF', 'HS', 'IM', 'JE', 'KE', 'KI', 'WI', 'LV', 'LIM', 'LR', 'LH', 'LU', 'MA',
  'MAL', 'MAR', 'MRI', 'MO', 'MG', 'NO', 'NDS', 'NR', 'OE', 'OD', 'PA', 'PI', 'PIN',
  'RP', 'RE', 'RG', 'RO', 'ROT', 'SA', 'SH', 'SHO', 'SM', 'SD', 'SP', 'ST', 'SR',
  'SRP', 'SRW', 'SB', 'SOB', 'SG', 'SU', 'TB', 'TT', 'VN', 'VA', 'WA', 'BU', 'WB',
  'WW', 'WG', 'WS', 'WP', 'YK', 'ZE'
];

export default CattleItemComponent;
