'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('shoppinglists').factory('ShoppingLists', ['$resource',
  function ($resource) {
    return $resource('api/shoppinglists/:shoppinglistId', {
      shoppinglistId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
