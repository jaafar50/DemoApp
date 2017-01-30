var express = require('express');
var path = require('path');
var app = express();
var rootPath= path.normalize(__dirname + '/../'); // root directory
// let us create the variable events
var events= require('./eventsController');
// this event controller is created and have a save and get method on it ! 
// npm install bodyparser then we pull that into our web server
// this enables to pull json out of the html body and parse it correctly
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + '/app')); // static function serves fils to app directory without processing at all

// get and post will enable us to get data from server and save data in the server from our app
app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8000); //listen to a port

console.log('Listening on port 8000...');