(function(){
  'use strict';


  var shoppingList = [
    "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Bismol",
    "Pepto Bismol (Chocolate Flavor)","Pepto Bismol (Cookie Flavor)",
  ];

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);
  ShoppingListController.$inject = ['$scope', '$timeout'];

  function ShoppingListController($scope) {
    $scope.shoppingList = shoppingList;

    $scope.showNumberOfWatchers = function () {
      console.log("# of Watchers: " +  $scope.$$watchersCount);
    };
  };

})();
