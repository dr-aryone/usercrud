var express = require('express'),
    router = express.Router();

router
  .route('/')
  .get(function (req, res) {
    return res.render('index');
  });

module.exports = router;
