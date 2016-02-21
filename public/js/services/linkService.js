(function () {
  'use strict';

  angular
    .module('writeAway')
    .factory('linkService', ['$http', 'authService', linkService]);

  function linkService ($http, authService) {
    var ret = {
      links: [],
      deleteLink: deleteLink,
      getAll: getAll,
      submit: submit
    };

    var headers = { headers: { Authorization: 'Bearer ' + authService.getToken() } };

    function deleteLink (link) {
      return $http.delete('/api/v1/links/' + link._id, headers).then(function (data) {
        ret.links.splice(ret.links.indexOf(link), 1);
      });
    }

    function getAll () {
      return $http.get('/api/v1/links', headers).then(function (data) {
        return angular.copy(data.data, ret.links);
      });
    }

    function submit (link) {
      return $http.post('/api/v1/links', link, headers).then(function (data) {
        link.name = null;
        link.url = null;
        link.submittedBy = null;

        ret.links.push(data.data);
      });
    }

    return ret;
  }
}());
