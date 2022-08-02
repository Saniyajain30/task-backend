const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 400,
    },
    author: {
      type: String,
      required: true,
      maxlength: 400,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);