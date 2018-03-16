import React, { Component } from 'react';
import './App.css';
import Heading from './heading'
import Navigation from './navigation'
import Game from './components/game'



class App extends Component {


  render() {
    let  handleKeyPress = ()=>{
      console.log("e")
    }
    return (
      <div className="App" onKeyPress={handleKeyPress}>
        <Heading />
        
        <Game />
      </div>
    );
  }
}



export default App;
