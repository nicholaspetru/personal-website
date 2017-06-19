import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ExperienceItem from './experience_item.jsx';
import ExperienceInfoContainer from './experience_info_container.jsx';
import EXPERIENCES from '../experience_list.js';

class JobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'nfx' };
    this.buildExperience = this.buildExperience.bind(this);
    this.activateExperience = this.activateExperience.bind(this);
  }

  buildExperience = (EXPERIENCES, activate, active) => {
    return Object.keys(EXPERIENCES).map(function(key) {
      return (
        <ExperienceItem
          activeKey={ active }
          experienceKey={ key }
          { ...EXPERIENCES[key] }
          handleClick={ activate }
          organization={ EXPERIENCES[key].organization }
        />
      )
    })
  }

  activateExperience = (experienceKey) => {
    this.setState({ active: experienceKey })
  }

  render() {
    const activateExperience = this.activateExperience
    return (
      <div className="experience-section">
        <Row>
          { this.buildExperience(EXPERIENCES, activateExperience, this.state.active) }
        </Row>
        <div style={ { borderBottom: '1px dashed #A3ABE0', width: '50%', margin: '0 auto' } } />
        <ExperienceInfoContainer { ...EXPERIENCES[this.state.active] } />
      </div>
    );
  }
}

export default JobContainer;
