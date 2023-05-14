require('dotenv').config();
const express = require('express');
const postsRoutes = require('./routes/posts');

// express app
const app = express();

// middleware
// parses incoming JSON requests and puts inside req.body
app.use(express.json());

// displays every req type and path made to server
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use('/api/posts', postsRoutes);

app.listen(process.env.PORT, () => {
  console.log('listening on port 4000');
});
