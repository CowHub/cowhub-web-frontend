require('./HomeComponent.scss')

import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class HomeComponent extends Component {

  static displayName = 'Home Component';

  static tools = [
    {
      icon: require('../assets/images/register-icon.png'),
      title: 'REGISTRATION',
      description: 'Register your cattle with our user-friendly mobile application.',
    },
    {
      icon: require('../assets/images/track-icon.png'),
      title: 'TRACKING',
      description: 'Keep track of your cattle at all time.',
    },
    {
      icon: require('../assets/images/identify-icon.png'),
      title: 'RECOGNITION',
      description: 'Identify your cattle with a simple picture.',
    }
  ];

  renderIntro() {
    return (
      <div className='homepage-intro-section'>
        <img className='homepage-intro-background-image' src={ require('../assets/images/cow_dark.png') }/>
        <img className='homepage-intro-logo' src={ require('../assets/images/CowHub-logo.png') }/>
        <div className='homepage-intro-tagline'>
          YOUR CATTLE MANAGEMENT TOOL
        </div>
        <i className='homepage-intro-arrow fa fa-chevron-down' aria-hidden="true"/>
      </div>
    );
  };

  renderMission() {
    return (
     <div className='homepage-mission-section' id='mission'>
       <div className='homepage-mission-section-title'>
         OUR MISSION
       </div>
       <div className='homepage-mission-pitch'>
         CowHub aims to replace the current tagging system standard used for cattle tracking.
       </div>
       <div className='homepage-mission-pitch'>
         It is a new and modern way to to identify individuals of a herd by using facial recognition.
       </div>
     </div>
    );
  };

  renderQuote() {
    return (
      <div className='homepage-quote-section'>
        <div className='homepage-quote'>
          "COWHUB IS AN INOVATIVE SOLUTION THAT USES STATE OF THE ART TECHNOLOGY TO IDENTIFY CATTLE IN A NON INTRUSIVE WAY."
        </div>
      </div>
    );
  };

  renderTools() {
    return (
      <div className='homepage-tools-section' id='mission'>
        <div className='homepage-tools-section-title'>
          OUR TOOLS
        </div>
        <div className='homepage-tools-list'>
          { HomeComponent.tools.map((tool) => {
            return this.renderTool(tool);
          })}
        </div>
      </div>
    );
  };

  renderTool(tool) {
    return (
      <div className='homepage-tool-wrapper' key={ tool.title }>
        <img className='homepage-tool-icon' src={ tool.icon }/>
        <div className='homepage-tool-title'>{ tool.title }</div>
        <div className='homepage-tool-description'>{ tool.description }</div>
      </div>
    );
  };

  renderJoin() {
    return (
      <div className='homepage-join-section'>
        <Link to='/user/login' className='homepage-join-button' >SIGN UP</Link>
      </div>
    );
  };

  render() {
    return (
      <div className="homepage-wrapper" >
        { this.renderIntro() }
        { this.renderMission() }
        { this.renderQuote() }
        { this.renderTools() }
        { this.renderJoin() }
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
