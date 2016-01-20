var React = require('react');
var DOM = require('react-dom');

App = React.createFactory({
	render: function() {
		return DOM.div(null, "Hello world");
	}
});
