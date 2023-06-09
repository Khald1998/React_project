const { Schema, model, Types } = require('mongoose');


const ProductSchema = new Schema({
    _id: {
        type: Types.ObjectId,

    },

    name: {
        type: String,
        unique: true,
        required: true
    },

    storeId: {
        type: String,
        required: true
    },

    storeName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },


});

const ProductModel = model('Product', ProductSchema);

module.exports = ProductModel;
