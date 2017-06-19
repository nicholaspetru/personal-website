import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Mailto from 'react-mailto';

class Header extends Component {
  render() {
    const headers = {
      "body": "I came across your website and want to get in touch."
    }
    return (
      <Navbar inverse collapseOnSelect className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">nick petru</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/resume">
              <li>
                <a>
                  <i className="fa fa-briefcase" aria-hidden="true"></i><br />resume
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/photos">
              <li>
                <a>
                  <i className="fa fa-camera" aria-hidden="true"></i><br />photography
                </a>
              </li>
            </LinkContainer>
            <li>
              <a className="mail-link">
                <i className="fa fa-envelope" aria-hidden="true"></i><br />
                <Mailto email="nicholaspetru@gmail.com" obfuscate={true} headers={ headers }>email</Mailto>
              </a>
            </li>
            <NavItem href="https://www.linkedin.com/in/nicholaspetru/" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i><br />linkedin
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
