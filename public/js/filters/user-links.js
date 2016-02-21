(function () {
  'use strict';

  angular
    .module('writeAway')
    .filter('userLinks', [userLinks]);

  function userLinks () {
    return function (items, userId) {
      var results = [];

      items.forEach(function (item) {
        if (item.hasOwnProperty('submittedBy') && item.submittedBy._id === userId) {
          results.push(item);
        }
      });

      return results;
    };
  }
}());
