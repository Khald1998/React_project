const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
    type: String,
    required: true
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
  }

});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
