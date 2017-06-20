import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {
  render() {
    let { experienceKey, activeKey, logo, handleClick } = this.props
    return (
        <Col
          xs={ 3 }
          className={ `job-container ${ experienceKey===activeKey ? 'active' : '' } ` }
          onClick={ () => handleClick(experienceKey) }
        >
          <img src={ logo } className="experience-item" />
        </Col>
    );
  }
}

ExperienceItem.defaultProps = {
  experienceKey: '',
  logo: '',
  handleClick: () => {}
};

ExperienceItem.propTypes = {
  experienceKey: PropTypes.string,
  logo: PropTypes.string,
  handleClick: PropTypes.func
}

export default ExperienceItem;
