const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/projecto_final/users', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth');
const partsRoutes = require('./routes/parts');
const assembliesRoutes = require('./routes/assemblies');

app.use('/api/auth', authRoutes);
app.use('/api/parts', partsRoutes);
app.use('/api/assemblies', assembliesRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
