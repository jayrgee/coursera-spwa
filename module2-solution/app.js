(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {

  var itemsToBuy = this;

  itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  itemsToBuy.checkOffItem = function (itemIndex) {
    ShoppingListCheckOffService.checkOffItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {

  var itemsBought = this;

  itemsBought.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService () {
  var service = this,
    itemsToBuy = [
      { name: "apples", quantity: 9 },
      { name: "oranges", quantity: 8 },
      { name: "lemons", quantity: 7 },
      { name: "limes", quantity: 6 },
      { name: "pears", quantity: 5 }
    ],
    itemsBought = [];

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

  service.checkOffItem = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(item);
  };
}

} ());
