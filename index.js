const express = require('express');
const {connect} = require('./shared/database');
const authController = require('./controllers/authController');
const openapiBackend = require('openapi-backend');
const spec = require('./openapi.yaml');
const app = openapiBackend(spec);


const app = express();
app.use(express.json());

connect();

app.post('/api/auth/registo', authController.register);
app.post('/api/auth/login', authController.login);

app.listen(3000, () => {
  console.log('Porta 3000');
});