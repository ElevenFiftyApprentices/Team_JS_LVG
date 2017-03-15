'use strict';

// Articles controller
angular.module('shoppinglists').controller('ShoppingListsController', ['$scope', '$stateParams', '$location', 'Authentication', 'ShoppingLists',
  function ($scope, $stateParams, $location, Authentication, ShoppingLists) {
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
        content: this.content
      });

      // Redirect after save
      shoppinglist.$save(function (response) {
        $location.path('shoppinglists/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
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

    // Find a list of Articles
    $scope.find = function () {
      $scope.shoppinglists = ShoppingLists.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.shoppinglist = ShoppingLists.get({
        shoppinglistId: $stateParams.shoppinglistId
      });
    };

}]);

    //Item List drop down
    // var shoppinglistitem = $scope.shoppinglistitem;
//       $scope.priority = [{
//     name: "Get it now!",
//   }, {
//     name: "It can wait",
//   }, {
//     name: "Add it to the list",
//       }];
//   $scope.priority = "";
// });
//   }
// ]);
