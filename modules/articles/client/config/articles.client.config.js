'use strict';

// Configuring the Articles module
angular.module('shoppinglists').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'ShoppingLists',
      state: 'shoppinglists',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'shoppinglists', {
      title: 'List Articles',
      state: 'shoppinglists.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'shoppinglists', {
      title: 'Create ShoppingLists',
      state: 'shoppinglists.create',
      roles: ['user']
    });
  }
]);
