var http = require('http');
var static = require('node-static');
var app = require('./app.js');
var React = require('react');
var DOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

// Static file server
var fileServer = new static.Server('./public');

var server = http.createServer(function(req, res) {
	// API route handling
	if (req.url === '/api') {
		res.setHeader('Content-Type', 'text/javascript');
		res.writeHead(200);
		res.end('this is the api data');
	} else if (req.url === '/iso') {
		var html = ReactDOMServer.renderToStaticMarkup(DOM.body(null, ReactDOMServer.renderToString(app)));
		console.log(html);
		res.setHeader('Content-Type', 'text/html');
		res.end(html);
	} else {
		// Satic server handling
		req.addListener('end', function () {
		res.setHeader('Content-Type', 'text/html');
			fileServer.serve(req, res);
		}).resume();
	}

});

console.log('server starting....');
server.listen(3000);
