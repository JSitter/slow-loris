import React, { Component } from 'react';
import './App.css';
import Heading from './heading'
import Navigation from './navigation'
const mongoose = require('mongoose');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Navigation />
        <p className="App-intro">
          Slow loris doesn't swim and certainly doesn't like to get wet. 
        </p>
        hello {process.env.REACT_APP_WEATHER_KEY}
      </div>
    );
  }
}

export default App;