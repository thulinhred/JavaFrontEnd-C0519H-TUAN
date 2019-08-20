var http = require('http');
var express = require('express');
var port = process.env.port || 8090;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/meanDb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log("Backend running on port: ", port);