const { Schema, model } = require('mongoose');

const UserStoreSchema = new Schema({

    _id: {
        type: String,
        default: function () { return `${this.userId}_${this.storeId}_${this.productId}` },
        required: true
    },

    userId: {
        type: String,
        required: true
    },

    storeId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },


});

const UserStoreModel = model('UserStore', UserStoreSchema);

module.exports = UserStoreModel;
