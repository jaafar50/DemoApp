var express = require('express');
var path = require('path');
var app = express();
var rootPath= path.normalize(__dirname + '/../'); // root directory

app.use(express.static(rootPath + '/app')); // static function serves fils to app directory without processing at all
app.listen(8000); //listen to a port

console.log('Listening on port 8000...');