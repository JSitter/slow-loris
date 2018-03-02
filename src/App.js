import React, { Component } from 'react';
import logo from './slow-loris.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Slow Loris">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slow Loris</h1>
        </header>
        <p className="App-intro">
          Slow loris doesn't swim and certainly doesn't like to get wet. 
        </p>
      </div>
    );
  }
}

export default App;
