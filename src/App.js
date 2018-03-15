import React, { Component } from 'react';
import './App.css';
import Heading from './heading'
import Navigation from './navigation'
import Game from './components/game'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        
        <Game />
      </div>
    );
  }
}



export default App;
