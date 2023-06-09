const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
  _id: {
    type: Types.ObjectId,

  },
  phone: {
    type: Number,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  products: {
    type: Map,
    required: false,
    default: {}
  }

});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
