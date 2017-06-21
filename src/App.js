import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './assets/font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import JobContainer from './components/job_container.jsx'
import Photography from './components/photography.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop
    this.setState({ scrolled: scrollTop > 150 });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header scrolled={ this.state.scrolled }/>
          <Grid fluid>
            <div className={ classNames('route-container', { scrolled: this.state.scrolled }) }>
              <Route exact path="/" component={ Home } />
              <Route path="/resume" component={ JobContainer } />
              <Route path="/photos" component={ Photography } />
            </div>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
