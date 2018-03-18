var Phaser = require('../scripts/phaser.js')
var React = require('react-phaser'),

    MyGame = React.createClass({
    	render: function () {
			return <game/>;
		}
    });


React.render(<MyGame/>, 'game');