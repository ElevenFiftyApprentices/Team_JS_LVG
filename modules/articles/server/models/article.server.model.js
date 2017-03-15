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
    default: '',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  content: {
    id: Number,
    type: [],
    default: [],
    isChecked: {
      type: Boolean,
      default: false
      },
    priority: {
      type: String,
      default: '',
    },
    created: {
      type: Date,
      default: Date.now
    },
    modified: {
      type: Date,
      default: Date.now
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
      }
    },
    trim: true,
  },
});

mongoose.model('ShoppingList', ShoppingListSchema);
