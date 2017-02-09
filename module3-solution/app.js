(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', '');
//.constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com');


function FoundItemsDirective () {

  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var search = this;

  search.searchTerm = '';
  search.found = [];

  search.filterList = filterList;

  filterList();

  function filterList() {
    var promise = MenuSearchService.getMatchedMenuItems(search.searchTerm);

    promise.then(function (response) {
      search.found = response;
    })
    .catch(function (error) {
      console.log('Something went terribly wrong.');
    });

  }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;

  //service.getMenuItems = getMenuItems;
  service.getMatchedMenuItems = getMatchedMenuItems;

  function getMatchedMenuItems (searchTerm) {

    return $http({
      method: 'GET',
      url: (ApiBasePath + '/menu_items.json')
    }).then(function (result) {

      // process result and only keep items that match
      var items = result.data.menu_items;

      if (searchTerm && searchTerm.length > 0) {
        return getMatchedItems(items, searchTerm.toLowerCase());
      }

      return items;

    });
  }

  function getMatchedItems (items, searchTerm) {
    var foundItems = [];

    for (var i = 0; i < items.length; i++) {
      if (items[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
        foundItems.push(items[i]);
      }
    }
    return foundItems;
  }

  // function getMenuItems () {
  //   var response = $http({
  //     method: 'GET',
  //     url: (ApiBasePath + '/menu_items.json')
  //   });
  //   return response;
  // }

}

} ());
