(function() {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

// The MenuDataService should have 2 methods:

// getAllCategories
// - this method should return a promise which is a result of
//   using the $http service, using the following REST API endpoint:
//   https://davids-restaurant.herokuapp.com/categories.json
    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      }).then(function (result) {
        return result;
      });
    }

// getItemsForCategory(categoryShortName)
// - this method should return a promise which is a result of using the $http
//   service, using the following REST API endpoint:
//   https://davids-restaurant.herokuapp.com/menu_items.json?category=
//   , where, before the call to the server, your code should append whatever
//   categoryShortName value was passed in as an argument into the
//   getItemsForCategory method.

  }

}());
