import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './assets/font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import JobContainer from './components/job_container.jsx'
import Photography from './components/photography.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Grid fluid>
            <Route exact path="/" component={ Home } />
            <Route path="/resume" component={ JobContainer } />
            <Route path="/photos" component={ Photography } />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
