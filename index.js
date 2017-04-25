var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var router = require('./app/routes');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});