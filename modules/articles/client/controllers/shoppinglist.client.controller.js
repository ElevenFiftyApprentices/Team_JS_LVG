'use strict';

angular.module('ShoppingListItem', [])
 .controller('PriorityController', ['$scope', function($scope) {
   $scope.data = {
     singleSelect: null,
     option1: 'It can wait',
     option2: 'Need it soon',
     option3: 'Grab it now!'
   };

   $scope.forceUnknownOption = function() {
     $scope.data.singleSelect = 'nonsense';
   };
 }]);