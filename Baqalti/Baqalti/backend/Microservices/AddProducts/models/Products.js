const { Schema, model } = require('mongoose');

const ProductsSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },    
  cost: {
    type: Number,
    
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const ProductsModel = model('Products', ProductsSchema);

module.exports = ProductsModel;
