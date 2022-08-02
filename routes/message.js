const Message = require('../models/Message');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();

    if (!messages) {
      return res.status(404).json('messages not found!');
    }

    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json('All fields are required!');
    }

    const newMessage = new Message(req.body);

    await newMessage.save();

    return res.status(201).json('Form submitted successfully!');
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

module.exports = router;
