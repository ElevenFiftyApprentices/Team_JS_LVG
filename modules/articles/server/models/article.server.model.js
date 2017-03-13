'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * ShoppingList Schema
 */
var ShoppingListSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

var ShoppingListItemSchema = new Schema({
  itemid: {
    type: Schema.ObjectId,
  },
  content: {
    type: String,
    default: '',
    trim: true,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.UTC
  },
  priority: {
    type: String,
    default: '',
  }
})



mongoose.model('ShoppingList', ShoppingListSchema);
mongoose.model('ShoppingLIstItem', ShoppingListItemSchema);
