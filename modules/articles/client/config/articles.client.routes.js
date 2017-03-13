'use strict';

// Setting up route
angular.module('shoppinglists').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('shoppinglists', {
        abstract: true,
        url: '/shoppinglists',
        template: '<ui-view/>'
      })
      .state('shoppinglists.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html'
      })
      .state('shoppinglists.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('shoppinglists.view', {
        url: '/:shoppinglistId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html'
      })
      .state('shoppinglists.edit', {
        url: '/:shoppinglistId/edit',
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
