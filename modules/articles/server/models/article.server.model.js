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
  modified: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  color: {
    type: String,
    default: '#ff0000',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  content: {
    // id: Number,
    type: [],
    default: [],

    created: {
      type: Date,
      default: Date.now
    },
    modified: {
      type: Date,
      default: Date.now
    },

    trim: true,
  },
  isChecked: {
      type: Boolean,
      default: false
      },
  notes: {
    type: String,
    default: '',
    created: {
    type: Date,
    default: Date.now
    },
    modified: {
    type: Date,
    default: Date.now
    },
  },
  priority: {
      type: String,
      default: '',
    },
});

mongoose.model('ShoppingList', ShoppingListSchema);
