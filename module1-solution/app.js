(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkMenu = function () {
    $scope.message = checkMenuString($scope.lunchMenu);
  };

  function checkMenuString (string) {
    if (string.length == 0) {
      return "Please enter data first";
    }
    var items = string.split(",");

    if (items.length < 4) {
      return "Enjoy!";
    }

    return "Too Much!";
  }
}

})();
