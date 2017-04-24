var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});