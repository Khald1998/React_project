const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  idea: { type: String, required: true },
  cluster: { type: Number, required: true }
}, { timestamps: true });

const MySchema = mongoose.model('MySchema', IdeaSchema);

module.exports = MySchema;
