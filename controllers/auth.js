const User = require('../models/user');
const jwt = require('../utils/jwt');

exports.register = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).send({ message: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(401).send({ message: 'Invalid username or password' });
  } else {
    const token = jwt.generateToken(user);
    res.send({ token });
  }
};