(function () {
  'use strict';

  angular
    .module('writeAway', ['ngRoute'])
    .config(appRouter);

  function appRouter ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:  'views/home.html',
        controller:   'HomeCtrl',
        controllerAs: 'home',
        resolve: {
          links: function (linkService) {
            return linkService.getAll();
          }
        }
      })
      .when('/login', {
        templateUrl:  'views/login.html',
        controller:   'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl:  'views/register.html',
        controller:   'RegisterCtrl',
        controllerAs: 'reg'
      })
      .otherwise({ redirectTo: '/' });
  }
}());
