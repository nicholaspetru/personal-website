import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ExperienceItem from './experience_item.jsx';
import ExperienceInfoContainer from './experience_info_container.jsx';
import EXPERIENCES from '../experience_list.js';

class JobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'nfx' };
    this.buildExperience = this.buildExperience.bind(this);
    this.activateExperience = this.activateExperience.bind(this);
    this.displayReference = this.displayReference.bind(this);
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

  displayReference(reference) {
    if (reference) {
      return (
        <Col xs={ 8 } className="reference">
          <p>{ reference.note }</p>
          <span>-&nbsp;{ reference.person }</span>
        </Col>
      )
    }

  }

  render() {
    const activateExperience = this.activateExperience
    let currentJob = EXPERIENCES[this.state.active]
    return (
      <div className="experience-section">
        <Row>
          { this.buildExperience(EXPERIENCES, activateExperience, this.state.active) }
        </Row>
        <ExperienceInfoContainer { ...currentJob } />
        <Row>
          { this.displayReference(currentJob.reference) }
        </Row>
      </div>
    );
  }
}

export default JobContainer;
