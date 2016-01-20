var React = require('react');
var DOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return DOM.div(null, "Hello world");
	}
});
