const Part = require('../models/part');

exports.createPart = async (req, res) => {
  const part = new Part(req.body);
  try {
    await part.save();
    res.status(201).send({ message: 'Part created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating part' });
  }
};

exports.getParts = async (req, res) => {
  const parts = await Part.find();
  res.send(parts);
};