import React, { Component } from 'react';
import hero from "./assets/slow-loris.png"

class Sprite extends Component{

    constructor(props){
        super(props)
        this.state = {
            pos : 0
        }
    }

    render(){
        return (
            <div className="SlowLoris" >
                <img src={hero} className="hero" alt="Slow Loris"/>
            </div>
        )
    }
}

export default Sprite