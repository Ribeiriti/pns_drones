const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  return token;
};

exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded.userId;
  } catch (err) {
    return null;
  }
};