import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Mailto from 'react-mailto';
import classNames from 'classnames';

class Header extends Component {
  render() {
    const headers = {
      "body": "I came across your website and want to get in touch."
    }
    return (
      <Navbar inverse collapseOnSelect className={ classNames('header', { scrolled: this.props.scrolled }) }>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">nick petru</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className={ classNames({ scrolled: this.props.scrolled }) }>
          <Nav pullRight>
            <LinkContainer to="/resume">
              <li>
                <a className="mail-link">
                  <i className="fa fa-briefcase" aria-hidden="true"></i><br /><span>resume</span>
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/photos">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
