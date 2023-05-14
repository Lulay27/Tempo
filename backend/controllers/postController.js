const { dbConnection } = require('../models/db');

// create a table
const createTable = async (req, res) => {
  const db = dbConnection();
  const sql =
    'CREATE TABLE posts(id VARCHAR(36) NOT NULL DEFAULT (UUID()), score VARCHAR(255), course VARCHAR(255), comments VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id))';
  const query = db.query(sql, (error, results) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// get all Posts
const getAllPosts = async (req, res) => {
  const db = dbConnection();
  const sql = 'SELECT * FROM posts';
  const query = db.query(sql, (error, results) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// get a single Post  ***add checks for if id is valid then if id exists
const getSinglePost = async (req, res) => {
  const db = dbConnection();
  const { id } = req.params;
  const sql = 'SELECT * FROM posts WHERE id=?';
  const query = db.query(sql, [id], (error, results) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// create a Post  ** must have a score and course check that l8r
const createPost = async (req, res) => {
  const db = dbConnection();
  const sql = 'INSERT INTO POSTS SET ?';
  const body = req.body;
  const query = db.query(sql, [body], (error, results) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// delete a Post check if id is valid then if it exists before sending
const deletePost = async (req, res) => {
  const db = dbConnection();
  const { id } = req.params;
  const sql = 'DELETE FROM posts WHERE id=?';
  const query = db.query(sql, [id], (error, results) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};

// update a Post  ** check if certain fields are filled in etc
const updatePost = async (req, res) => {
  const db = dbConnection();
  const { id } = req.params;
  const { course, score, comments } = req.body;

  // add couple if statements or checks to see what was updated to send certain sql
  // for now assume everything is updated but date

  const sql = 'UPDATE posts SET course=?, score=?, comments=? WHERE id=?';
  const query = db.query(
    sql,
    [course, score, comments, id],
    (error, results) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(results);
    }
  );
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  createTable,
};
