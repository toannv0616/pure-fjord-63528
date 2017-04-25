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
    user.password = req.body.password;
    user.save(function (err, user) {
        if (err) next(err);
        res.json(user);
        return;
    });
};

var userLogin = function (req, res, next) {
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) next(err);
        if (!user) {
            res.json({ message: 'Not found user' });
            return;
        }
        user.validatePassword(req.body.password, function (err, success) {
            if (err) next(err);
            if (success) {
                res.json(user);
            } else {
                res.json({ message: 'Wrong password' });
            }
            return;
        });
    });
};

module.exports = {
    homepage: homepage,
    login: login,
    newUser: newUser,
    userLogin: userLogin
};