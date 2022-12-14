const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();

// login

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Please provide username, email and password!',
    });
  }

  const user = await User.findOne({ email });
  if (user)
    return res.status(403).json({
      error: 'User already exists',
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const { password, ...others } = newUser._doc;

    return res.status(201).json('User registered successfully!');
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// login
router.post('/login', async (req, res) => {
  const { email, password: clientPassword } = req.body;

  if (!email || !clientPassword) {
    return res.status(400).json({
      error: 'Please provide email and password!',
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: 'User not registered!',
      });
    }

    const validPassword = await bcrypt.compare(clientPassword, user.password);

    if (!validPassword) {
      return res.status(403).json({
        error: 'Invalid credentials!',
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password, ...others } = user._doc;

    return res.status(200).json({
      user: {
        ...others,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: err.message,
    });
  }
});

module.exports = router;
