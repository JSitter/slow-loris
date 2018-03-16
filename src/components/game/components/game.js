import React, { Component } from 'react';
import Sprite from './sprite'
import {TweenMax, Elastic} from 'gsap'; 

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            distance: 40,
            randomDev: 20,
            speed: 7,
            x:0,
            y:0
        }
        this.handleKeyPress.bind(this)
        document.addEventListener("keydown", this.handleKeyPress)

    }
    handleKeyPress= (e)=>{
        let key = e.keyCode
        let randDeviation = Math.floor(Math.random() * (this.state.randomDev + 1));
        console.log("hello " + randDeviation)

        if(key == 74){
            //J Key Pressed
            let x = this.state.x
            let newXPos = x - (this.state.distance + randDeviation)
            this.setState({x:newXPos})

        }else if(key == 73){
            //I key pressed
            let y = this.state.y
            let newYPos = y - (this.state.distance + randDeviation)
            this.setState({y:newYPos})

        }else if(key == 75){
            //K key pressed
            let y = this.state.y
            let newYPos = y + (this.state.distance + randDeviation)
            this.setState({y:newYPos})

        }else if(key == 76){
            //L key pressed
            let x = this.state.x
            let newXPos = x + (this.state.distance + randDeviation)
            this.setState({x:newXPos})
        }
        

        let newXPos = this.state.x
        let newYPos = this.state.y
        TweenMax.to(".hero", this.state.speed, {x:newXPos});
        TweenMax.to(".hero", this.state.speed, {y:newYPos});

    }
    render(){

        return (
            <div className="board">
                <Sprite />
            </div>
        )
    }

}

export default Game