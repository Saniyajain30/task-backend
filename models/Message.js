const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    message: {
      type: String,
      required: true,
      maxlength: 400,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', MessageSchema);
