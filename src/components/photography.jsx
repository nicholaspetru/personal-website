import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { Modal } from 'react-bootstrap';
import PHOTOS from '../assets/image_src.js';

class Photography extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, currentPhotoIndex: 0 }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSpainClick = this.handleSpainClick.bind(this);
    this.handleWildClick = this.handleWildClick.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  handleSpainClick(photoIndex) {
    this.setState({ showModal: true })
    this.setState({ currentPhotoIndex: photoIndex })
  }

  handleWildClick(photoIndex) {
    this.setState({ showModal: true })
    this.setState({ currentPhotoIndex: photoIndex + 20 })
  }

  render() {
    let index = this.state.currentPhotoIndex;
    return (
      <div className="Photography">
        <h2 className="text-left">Spain and thereabouts</h2>
        <Gallery photos={ PHOTOS.slice(0, 20) } onClickPhoto={ this.handleSpainClick } />
        <br />
        <br />
        <h2 className="text-left">Wildernesses</h2>
        <Gallery photos={ PHOTOS.slice(20) } onClickPhoto={ this.handleWildClick } />
        <Modal show={ this.state.showModal } onHide={ this.toggleModal } className="gallery-modal">
          <Modal.Body>
            <img src={ PHOTOS[index].src } className="modal-photo" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Photography;
