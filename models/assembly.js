const mongoose = require('mongoose');

const assemblySchema = new mongoose.Schema({
  name: String,
  description: String,
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part' }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Assembly', assemblySchema);