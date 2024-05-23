const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/projecto_final', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connectado!');
  } catch (error) {
    console.error('Erro a conectar!', error);
  }
};

module.exports = {connect};