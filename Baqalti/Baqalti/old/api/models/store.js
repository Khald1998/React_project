const { Schema, model, Types } = require('mongoose');

const StoreSchema = new Schema({

    _id: {
        type: Types.ObjectId
    },

    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }

});

const StoreModel = model('Store', StoreSchema);

module.exports = StoreModel;
