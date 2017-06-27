import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Mailto from 'react-mailto';
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggleSelect = this.handleToggleSelect.bind(this);
  }

  handleSelect() {
    this.setState({ expanded: false })
  }

  handleToggleSelect(fromToggle) {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const headers = {
      "body": "I came across your website and want to get in touch."
    }
    return (
      <Navbar inverse collapseOnSelect className={ classNames('header', { scrolled: this.props.scrolled }) }>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/personal-website">nick petru</Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={ this.handleToggleSelect } />
        </Navbar.Header>
        <Navbar.Collapse in={ this.state.expanded } className={ classNames({ scrolled: this.props.scrolled }) }>
          <Nav pullRight>
            <LinkContainer to="/personal-website/resume" onClick={ this.handleSelect }>
              <li>
                <a className="mail-link">
                  <i className="fa fa-briefcase" aria-hidden="true"></i><br /><span>resume</span>
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/personal-website/photos" onClick={ this.handleSelect }>
              <li>
                <a className="mail-link">
                  <i className="fa fa-camera" aria-hidden="true"></i><br /><span>photography</span>
                </a>
              </li>
            </LinkContainer>
            <li>
              <Mailto className="mail-link" email="nicholaspetru@gmail.com" obfuscate={true} headers={ headers }>
                <i className="fa fa-envelope" aria-hidden="true"></i><br /><span>email</span>
              </Mailto>
            </li>
            <li>
              <a className="mail-link" href="https://www.linkedin.com/in/nicholaspetru/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i><br /><span>linkedin</span>
              </a>
            </li>
            <li>
              <a className="mail-link" href="https://www.instagram.com/picknetru/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i><br /><span>instagram</span>
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
