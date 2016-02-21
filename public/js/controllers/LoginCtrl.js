(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('LoginCtrl', ['authService', '$location', LoginCtrl]);

  function LoginCtrl (authService, $location) {
    this.login = login;
    this.user = {};

    function login (user) {
      authService.login(user).then(function () {
        $location.path('/');
      });
    }
  }
}());
