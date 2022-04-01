const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const listingSchema = new Schema({

  item_name: {
    type: String,
    required: 'Please enter an item name!',
    trim: true,
    maxlength: 150,
  },
  price: {
    type: Number,
    required: 'Please enter a price!',
    trim: true
  },
  description: {
    type: String,
    required: 'Please enter a description!'
  },
  condition: {
    type: String,
    required: 'Please choose a condition for your item!'
  },
  quantity: {
    type: Number,
    required: 'Please enter a quantity!',
    trim: true
  },
  returns: {
    type: String,
    required: 'Enter your return policy.',
    trim: true
  },
  pictures: {
    type: String
  },
  users_watching: {
    type: Number
  },
  date: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp)
  },
  user :{
    type: Schema.Types.ObjectId,
  }
});

const Listing = model('Listing', listingSchema);

module.exports = Listing;
