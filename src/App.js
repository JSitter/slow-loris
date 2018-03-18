import React, { Component } from 'react';
import './App.css';
import Heading from './heading'
import Navigation from './navigation'
import Stage from './components/stage'



class App extends Component {


  render() {

    return (
      <div className="App">
        <Heading />
        
        <Stage />

      </div>
    );
  }
}



export default App;
