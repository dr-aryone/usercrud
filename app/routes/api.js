var express = require('express'),
    router = express.Router();

var jwt = require('express-jwt'),
    auth = jwt({ secret: 'SECRET', userProperty: 'payload' });

var users = require('../controllers/users.js'),
    links = require('../controllers/links.js');

//router.use(auth);

router
  .route('/users')
  .get(users.getAllUsers);

router
  .route('/users/:user')
  .get(users.getUser)
  .delete(users.deleteUser);

router
  .route('/users/:user/setadmin')
  .put(users.setUserAsAdmin);

router
  .route('/links')
  .get(links.getAllLinks)
  .post(links.createLink);

router
  .route('/links/:link')
  .delete(links.deleteLink);

router.param('user', users.userParam);
router.param('link', links.linkParam);

module.exports = router;
