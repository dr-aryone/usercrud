(function () {
  'use strict';

  angular
    .module('writeAway')
    .controller('HomeCtrl', ['links', 'linkService', 'authService', HomeCtrl]);

  function HomeCtrl (links, linkService, authService) {
    this.links = linkService.links;
    this.isAdmin = authService.currentUser().role;
    this.userId = authService.currentUser()._id;

    this.deleteLink = deleteLink;

    function deleteLink (link) {
      linkService.deleteLink(link);
    }
  }
}());
