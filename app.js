// Use the express module
var express = require('express')
// create a new instance of express
var app = express();

//~~~ROUTES~~~//

//Home Page
app.get('/', function(req,res){
	res.send ("Type forward slash and red, yellow, blue or green to see the different routes.");

});

//Red Page
app.get('/red', function(req,res){
	res.send ("<h1 style='color:red'>RED PAGE</h1>");

});

//Yellow Page
app.get('/yellow', function(req,res){
	res.send ("<h1 style='color:yellow'>YELLOW PAGE</h1>");

});

//Blue Page
app.get('/blue', function(req,res){
	res.send ("<h1 style='color:blue'>BLUE PAGE</h1>");

});

//Green Page
app.get('/green', function(req,res){
	res.send ("<h1 style='color:green'>GREEN PAGE</h1>");

});


//Start the server & listen for traffic on port 3000
app.listen(3000,function(){
	//Prints out a message to the console
	console.log ('Listening on port 3000, press Ctrl + C to exit')
});