require('./HeaderComponent.scss')

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class HeaderComponent extends Component {

  static propTypes = {
    links: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      method: React.PropTypes.func.isRequired
    }))
  };

  renderTitle() {
    return (
      <Link className="navbar-brand navbar-link" to='/'>
        CowHub
      </Link>
    );
  };

  renderLinks() {
    return (
      <ul className="nav navbar-nav navbar-right">
        { this.props.links.map((link) => {
          return this.renderLink(link);
        })}
      </ul>
    );
  };

  renderLink(link) {
    return (
      <li key={ link.title }>
        <a className='navbar-link'
          onClick={ () => link.method() }>
          { link.title }
        </a>
      </li>
    );
  };

  renderToggleNavigation() {
    return (
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
    );
  };

  render() {
    return (
      <nav className="app-nav navbar navbar-default navbar-fixed-top">
        <div className="">
          <div className="navbar-header">
            { this.renderToggleNavigation() }
            { this.renderTitle() }
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            { this.renderLinks() }
          </div>
        </div>
      </nav>
    );
  }
};

export default HeaderComponent;
