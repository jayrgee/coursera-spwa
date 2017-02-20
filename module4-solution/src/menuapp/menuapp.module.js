(function() {
  'use strict';

// Make sure the MenuApp module lists the data module as a dependency.
  angular.module('MenuApp',['data'])
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');
}());
