const User = require('/models/User');
const { generateToken } = require('/shared/utils');

exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const user = new User({
    username,
    password,
    email,
  });

  await user.save();

  res.status(201).json({ message: 'User created successfully', token: generateToken(user._id) });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  res.json({ token: generateToken(user._id) });
};