var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.get('/', controller.homepage);
router.get('/login', controller.login);
router.post('/newUser', controller.newUser);
router.post('/login', controller.userLogin);

module.exports = router;