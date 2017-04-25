var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.mongoURI);

mongoose.connection.on('error', function (err) {
    if (err) throw err;
});

mongoose.Promise = global.Promise;

module.exports = {
    mongoose: mongoose,
    User: require('./schemas/user')
};
