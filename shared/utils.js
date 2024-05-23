const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, Arr0z3$, { expiresIn: '1h' });
};

module.exports = { generateToken };