'use strict';

/**
 * Module dependencies.
 */
var shoppinglistsPolicy = require('../policies/articles.server.policy'),
  shoppinglists = require('../controllers/articles.server.controller');


module.exports = function (app) {
  // Articles collection routes
  app.route('/api/shoppinglists').all(shoppinglistsPolicy.isAllowed)
    .get(shoppinglists.list)
    .post(shoppinglists.create);

  // Single article routes
  app.route('/api/shoppinglists/:shoppinglistId').all(shoppinglistsPolicy.isAllowed)
    .get(shoppinglists.read)
    .put(shoppinglists.update)
    .delete(shoppinglists.delete);

  // Finish by binding the article middleware
  app.param('shoppinglistId', shoppinglists.shoppinglistByID);
};
