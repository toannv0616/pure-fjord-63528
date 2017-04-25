var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var SALT_WORK_FACTOR = 10;
var DEFAULT_USER_PICTURE = "/img/user.jpg";

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, default: null },
    socialId: { type: String, default: null },
    picture: { type: String, default: DEFAULT_USER_PICTURE }
});

// hash the password before saving
UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.validatePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, success) {
        if (err) return callback(err);
        callback(null, success);
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;