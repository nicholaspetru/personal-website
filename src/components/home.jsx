import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="homepage">
          <div className="bio">
            <p>Hi! I'm Nick.</p>

            <p>Born, raised, and residing in Oakland, CA (with a brief, educational stint in Northfield, MN). I have a love for music, wilderness, web engineering, photography, ultimate frisbee, and anything relating to my hometown.</p>

            <p>Please don't hesitate to <a>reach out</a>! While this is intended to be a professional site, I'm always eager to find others who share these passions. Also, if you like any of my photography I'd be happy to share the full files with you.</p>

            <p>Thanks!</p>
        </div>
        </div>
    );
  }
}

export default Home;
