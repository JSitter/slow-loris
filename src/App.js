import React, { Component } from 'react';
import './App.css';
import Heading from './heading'
import Navigation from './navigation'
import ReactGame from './components/reactgame'



class App extends Component {


  render() {
    let  handleKeyPress = ()=>{
      console.log("e")
    }
    return (
      <div className="App" onKeyPress={handleKeyPress}>
        <Heading />
        
        <ReactGame />
      </div>
    );
  }
}



export default App;
