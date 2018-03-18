import React, { Component } from 'react';
import Game from './game'

class ReactGame extends Component {
    render(){
        return (

            <Loop>
                <Stage>
                    <Game />
        
                    // Game specific components go here
                </Stage>
            </Loop>
        )
    }
}

export default ReactGame