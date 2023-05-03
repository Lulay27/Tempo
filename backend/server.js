require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const roundsRoutes = require('./routes/rounds');

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
app.use('/api/rounds', roundsRoutes);

// connecting to mongodb and port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port 4000');
    });
  })
  .catch((err) => console.log(err));
