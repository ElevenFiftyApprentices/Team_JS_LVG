'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  ShoppingList = mongoose.model('ShoppingList'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a shoppinglist
 */
exports.create = function (req, res) {
  var shoppinglist = new ShoppingList(req.body);
  shoppinglist.user = req.user;

  shoppinglist.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shoppinglist);
    }
  });
};

/**
 * Show the current shoppinglist
 */
exports.read = function (req, res) {
  res.json(req.shoppinglist);
};

/**
 * Update a shoppinglist
 */
exports.update = function (req, res) {
  var shoppinglist = req.shoppinglist;

  shoppinglist.title = req.body.title;
  shoppinglist.content = req.body.content;

  shoppinglist.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shoppinglist);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var shoppinglist = req.shoppinglist;

  shoppinglist.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shoppinglist);
    }
  });

  var shoppinglistitems = req.shoppinglist.content;

    shoppinglist.content.id.remove(function (err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(shoppinglist.content)
      }
    });
};

/**
 * List of ShoppingLists
 */
exports.list = function (req, res) {
  ShoppingList.find().sort('-created').populate('user', 'displayName').exec(function (err, shoppinglists) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(shoppinglists);
    }
  });
};

/**
 * ShoppingList middleware
 */
exports.shoppinglistByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Shopping List is invalid'
    });
  }

  ShoppingList.findById(id).populate('user', 'displayName').exec(function (err, shoppinglist) {
    if (err) {
      return next(err);
    } else if (!shoppinglist) {
      return res.status(404).send({
        message: 'No shopping list with that identifier has been found'
      });
    }
    req.shoppinglist = shoppinglist;
    next();
  });
};

