const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number,required: true, unique: true },
  idea: { type: String, required: true },
  cluster: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;
