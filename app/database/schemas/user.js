var mongoose = require('mongoose');

var DEFAULT_USER_PICTURE = "/img/user.jpg";

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, default: null },
    socialId: { type: String, default: null },
    picture:  { type: String, default:  DEFAULT_USER_PICTURE}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;