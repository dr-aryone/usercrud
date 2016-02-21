var express = require('express'),
    router = express.Router();

var users = require('../controllers/users.js');

router
  .route('/register')
  .post(users.createUser);

router
  .route('/login')
  .post(users.loginUser);

module.exports = router;
