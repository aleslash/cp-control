var express = require('express');
var app = express();
var peludos = require('./controllers/peludos');
var momentosPeludos = require('./controllers/momentosPeludos');

app = peludos(app);
app = momentosPeludos(app);


app.listen(3000, function() {
    console.log('App listening on port 3000!');
});