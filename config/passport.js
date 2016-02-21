var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function () {
  var User = mongoose.model('User');

  require('./strategies/local.js')();
};
