import React, { Component } from 'react';
import logo from './slow-loris.png';

class Heading extends Component{
    render(){
        return (<header className="Slow Loris">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slow Loris</h1>
        </header>)
    }
}

export default Heading