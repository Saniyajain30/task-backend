[8:18 am, 02/08/2022] Dinesh Rout Neog: const router = require('express').Router();
const Blog = require('../models/Blog');

rout
  try {
    const blogs = await Blog.find();

    if (!blogs) {
      return res.status(404).json('blogs not found!');
    }

    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
      return res.status(400).json('All fields are required!');
    }

    const newBlog = new Blog(req.body);

    await newBlog.save();

    return res.status(201).json('Blog added successfully!');
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

module.exports = router;
er.get('/', async (req, res) => {
[8:19 am, 02/08/2022] Dinesh Rout Neog: const router = require('express').Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (!blogs) {
      return res.status(404).json('blogs not found!');
    }

    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
      return res.status(400).json('All fields are required!');
    }

    const newBlog = new Blog(req.body);

    await newBlog.save();

    return res.status(201).json('Blog added successfully!');
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

module.exports = router;