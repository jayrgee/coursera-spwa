(function() {
  'use strict';
  // Create menudata.service.js file and create a service called MenuDataService in it.
  // This service should be declared on the data module, not on the MenuApp module.
  angular.module('data')
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
      }).then(function (response) {
        return response.data;
      });
      // return $http.get(ApiBasePath + '/categories.json')
      // .then(function (response) {
      //   return response.data;
      // });
    }

// getItemsForCategory(categoryShortName)
// - this method should return a promise which is a result of using the $http
//   service, using the following REST API endpoint:
//   https://davids-restaurant.herokuapp.com/menu_items.json?category=
//   , where, before the call to the server, your code should append whatever
//   categoryShortName value was passed in as an argument into the
//   getItemsForCategory method.
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
        return response.data;
      });
    };
  }

}());
