var init = function () {
    if (process.env.NODE_ENV === 'production') {
        return {
            mongoURI: process.env.mongoURI
        };
    }
    else {
        return require('./config.json');
    }
};

module.exports = init();
