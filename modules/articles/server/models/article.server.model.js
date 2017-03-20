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

  title: {
    type: String,
    default: '',
    required: 'Please provide a title for your shopping list',
    trim: true
  },
  color: {
    type: String,
    default: '#736F6E',  //Gray
    // default: '#' + '',
    trim: true
  },
  // name: {
  //   type: String,
  //   default: '',
  //   // required: 'Please provide an item name',
  //   trim: true
  // },
  // priority: {
  //   type: String,
  //   default: 'Low',
  //   // required: 'Please select the priority for this item',
  //   trim: true
  // },
  // notes: {
  //   type: String,
  //   default: '',
  //   trim: true
  // },
  isChecked: {
    type: Boolean,
    default: false
  },  
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
content: {
    type: [],
    default: [],

    trim: true,
  },

});

mongoose.model('ShoppingList', ShoppingListSchema);


