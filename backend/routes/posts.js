const express = require('express');

const {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  createTable,
} = require('../controllers/postController');

const router = express.Router();

// create table
router.post('/createtable', createTable);

// get all posts
router.get('/', getAllPosts);

// get single post
router.get('/:id', getSinglePost);

// post a post
router.post('/', createPost);

// delete a post
router.delete('/:id', deletePost);

// update a post
router.patch('/:id', updatePost);

module.exports = router;
