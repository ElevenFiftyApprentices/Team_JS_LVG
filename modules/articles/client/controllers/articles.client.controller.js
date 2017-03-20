'use strict';

// Articles controller
angular.module('shoppinglists').controller('ShoppingListsController', ['$scope', '$stateParams', '$injector', '$location', 'Authentication', 'ShoppingLists',
  function ($scope, $stateParams, $injector, $location, Authentication, ShoppingLists) {
    
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'shoppinglistForm');

        return false;
      }

      // Create new Shopping List object
      var shoppinglist = new ShoppingLists({
        title: this.title,
        content: this.content,
        color: this.color,
        priority: this.priority,
        isChecked: this.isChecked,
        notes: this.notes
        
      });

      // Redirect after save
      shoppinglist.$save(function (response) {
        $location.path('shoppinglists/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = [];
        $scope.color = '';
        $scope.priority = '';
        $scope.isChecked = true;
        $scope.notes = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (shoppinglist) {
      if (shoppinglist) {
        shoppinglist.$remove();

        for (var i in $scope.shoppinglists) {
          if ($scope.shoppinglists[i] === shoppinglist) {
            $scope.shoppinglists.splice(i, 1);
          }
        }
      } else {
        $scope.shoppinglist.$remove(function () {
          $location.path('shoppinglists');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'shoppinglistForm');

        return false;
      }

      var shoppinglist = $scope.shoppinglist;

      shoppinglist.$update(function () {
        $location.path('shoppinglists/' + shoppinglist._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Shopping lists
    $scope.find = function () {
      $scope.shoppinglists = ShoppingLists.query();
    };

    // Find existing Shopping list
    $scope.findOne = function () {
      $scope.shoppinglist = ShoppingLists.get({
        shoppinglistId: $stateParams.shoppinglistId
      });
    };
    var shoppinglist = $scope.shoppinglist;

    function addGrocery(grocery) {

      shoppinglist.push({
        content: shoppinglist.grocery.content,
        priority: shoppinglist.grocery.priority,
        notes: shoppinglist.grocerynotes,
        isChecked: shoppinglist.grocery.isChecked,
        content: shoppinglist.grocery.content,
      });
};
}]);