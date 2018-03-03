import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return(
        <nav>
            <div class="nav-wrapper blue lighten-2">
            <a href="#" class="brand-logo left">Slow Loris</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">

                <li><a href="badges.html">Login</a></li>
                <li><a href="collapsible.html">Signup</a></li>
                
            </ul>
            </div>
        </nav>
        )
    }
}

export default Navigation