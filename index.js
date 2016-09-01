var express = require('express');
var app = express();
var peludos = require('./controllers/peludos');
var momentosPeludos = require('./controllers/momentosPeludos');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app = peludos(app);
app = momentosPeludos(app);


app.listen(3000, function() {
    console.log('App listening on port 3000!');
});