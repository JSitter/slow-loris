import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return(
        <nav>
            <div className="nav-wrapper blue lighten-2">
            <a className="brand-logo left">Slow Loris</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

                <li><a href="badges.html">Login</a></li>
                <li><a href="collapsible.html">Signup</a></li>
                
            </ul>
            </div>
        </nav>
        )
    }
}

export default Navigation