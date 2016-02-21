(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('NavbarCtrl', ['authService', '$location', NavbarCtrl]);

  function NavbarCtrl (authService, $location) {
    this.getUsername = getUsername;
    this.isLoggedIn = isLoggedIn;
    this.logout = logout;

    function getUsername () {
      var userInfo = authService.currentUser();
      return userInfo.username;
    }

    function isLoggedIn () {
      return authService.isLoggedIn();
    }

    function logout () {
      authService.logout();
      $location.path('/login');
    }
  }
}());
