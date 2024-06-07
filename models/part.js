const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  quantity: Number
});

module.exports = mongoose.model('Part', partSchema);