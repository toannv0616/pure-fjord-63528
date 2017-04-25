var User = require('../database').User;

var homepage = function (req, res, next) {
    res.render('home');
};

var login = function (req, res, next) {
    res.render('login');
};

var newUser = function (req, res, next) {
    var user = new User();
    user.username = req.body.username;
    user.save(function (err, user) {
        if (err) next(err);
        res.json(user);
        return;
    });
};

module.exports = {
    homepage: homepage,
    login: login,
    newUser: newUser
};