import React, { Component } from 'react';
import { Modal, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ExperienceInfoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal})
  }

  render() {
    let { organization, tasks, position, duration, location, website } = this.props
    let key_count = 0;
    return (
      <Row className="experience-info-container">
        <Col xs={ 8 }>
          <div className="info-box">
            <h1 className="experience-info">{ organization }</h1>
            <h3 className="experience-info">{ position }</h3>
            <h4 className="experience-info">{ location }</h4>
            <h4 className="experience-info">{ duration }</h4>
          </div>
        </Col>
        <Col xs={ 4 }>
          <ButtonGroup vertical style={ { marginTop: 20 } }>
            <Button className="custom-btn" onClick={ this.toggleModal }>Read more</Button>
            <Button className="custom-btn" disabled={ !website } href={ website } target="_blank">View site</Button>
          </ButtonGroup>
          <Modal show={ this.state.showModal } onHide={ this.toggleModal }>
            <Modal.Header>
              <h3>{ organization }</h3>
              <h4>{ position }</h4>
            </Modal.Header>
            <Modal.Body>
              <ul>
                { tasks.map(function(task_item) {
                  key_count += 1;
                  return (<li key={ key_count }>{ task_item }</li>)
                })}
              </ul>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    );
  }
}

ExperienceInfoContainer.defaultProps = {
  organization: '',
  position: '',
  duration: '',
  location: '',
  website: '',
  logo: '',
  tasks: []
};

ExperienceInfoContainer.propTypes = {
  organization: PropTypes.string,
  position: PropTypes.string,
  duration: PropTypes.string,
  location: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  tasks: PropTypes.array
}

export default ExperienceInfoContainer;
