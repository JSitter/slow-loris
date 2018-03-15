import React, { Component } from 'react';
import Sprite from './sprite'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: 0
        }

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