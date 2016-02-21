(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('LinkFormCtrl', ['linkService', 'authService', LinkFormCtrl]);

  function LinkFormCtrl (linkService, authService) {
    this.userId = authService.currentUser()._id;

    this.submitLink = submitLink;

    function submitLink () {
      /* jshint validthis:true */
      this.submittedBy = this.userId;
      linkService.submit(this);
    }
  }
}());
