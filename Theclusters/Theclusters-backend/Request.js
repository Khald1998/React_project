const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  idea: String,
  cluster: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;
