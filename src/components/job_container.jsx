import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
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
        <Row className="text-left padded-copy"style={ { textAlign: 'left' } }>
          <h3>Qualifications</h3>
          <p><strong>Expertise:</strong>&nbsp;JavaScript, React, ES6, jQuery, HTML5, CSS, Sass, Git, Bootstrap</p>
          <p><strong>Familiarity:</strong>&nbsp;Redux, GraphQL, Ruby on Rails, RSpec, Python, Node, Java, PHP</p>
        </Row>
        <Row className="text-left padded-copy"style={ { textAlign: 'left' } }>
          <h3>Education</h3>
          <p><strong>Carleton College</strong> BA in Computer Science (2015)</p>
          <strong>Senior thesis (ADTeach):</strong>
          <p>An interactive, IDE web app that teaches proper implementation of abstract data types in Java by  animating code line by line.</p>
          <p>Built with: JavaScript, jQuery, Raphael.js, CSS, HTML</p>
          <Button className="custom-btn" target="_blank" href="http://cs.carleton.edu/cs_comps/1415/jadrian2/index.php">Read more</Button>
        </Row>
      </div>
    );
  }
}

export default JobContainer;
