var express = require('express');
var app = express();

// Set view engine
app.set('view engine', 'jade');

// Set public folder
app.use(express.static(__dirname + '/public'));

// Routes for app
app.get('/', function (req, res) {
	res.render('pad');
});

// Listen on port 8000 or the port defined
var port = process.env.PORT || 8000
app.listen(port);
