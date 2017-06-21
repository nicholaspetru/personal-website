import React, { Component } from 'react';
import Mailto from 'react-mailto';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const headers = {
      "body": "I came across your website and want to get in touch."
    }
    return (
        <div className="homepage">
          <div className="intro-banner">
            <div>
              <h1>Nick Petru</h1>
              <h3>Front End Engineer & Web Developer</h3>
            </div>
          </div>
          <div className="bio">
            <p>Hi! I'm Nick.</p>

            <p>Born, raised, and residing in Oakland, CA (with a brief, educational stint in Northfield, MN). I have a love for music, wilderness, web engineering, photography, ultimate frisbee, and anything relating to my hometown.</p>

            <p>
              If you're curious about my professional background, feel free to take a look at my <Link to="/resume">resume</Link>.
            </p>

            <p>Please don't hesitate to <Mailto email="nicholaspetru@gmail.com" obfuscate={true} headers={ headers }><a>reach out</a></Mailto>! While this is intended to be a professional site, I'm always eager to find others who share these passions. Also, if you like any of my photography I'd be happy to share the full files with you.</p>

            <p>Thanks!</p>
        </div>
        </div>
    );
  }
}

export default Home;
