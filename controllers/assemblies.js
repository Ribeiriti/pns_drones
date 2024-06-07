const Assembly = require('../models/assembly');
const Part = require('../models/part');

exports.createAssembly = async (req, res) => {
  const assembly = new Assembly(req.body);
  try {
    await assembly.save();
    res.status(201).send({ message: 'Assembly created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating assembly' });
  }
};

exports.getAssemblies = async (req, res) => {
  constassemblies = await Assembly.find();
  res.send(assemblies);
};

exports.getAssemblyById = async (req, res) => {
  const assembly = await Assembly.findById(req.params.id);
  if (!assembly) {
    res.status(404).send({ message: 'Assembly not found' });
  } else {
    res.send(assembly);
  }
};

exports.updateAssembly = async (req, res) => {
  const assembly = await Assembly.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!assembly) {
    res.status(404).send({ message: 'Assembly not found' });
  } else {
    res.send(assembly);
  }
};

exports.deleteAssembly = async (req, res) => {
  await Assembly.findByIdAndRemove(req.params.id);
  res.status(204).send();
};