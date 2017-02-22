(function() {
  'use strict';

// Make sure the MenuApp module lists the data module as a dependency.
  angular.module('MenuApp',['data', 'ui.router'])
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');
}());
