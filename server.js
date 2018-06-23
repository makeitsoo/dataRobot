// 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create (express) server
var app = express();

// PORT
var PORT = process.env.PORT || 8000;

// data parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// require routing files using express app
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// listener
app.listen(PORT, function() {
	console.log('Server listening on PORT: ' + PORT);
});
