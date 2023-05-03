const mongoose = require('mongoose');

// creating a Schema for rounds
const Schema = mongoose.Schema;
const roundSchema = new Schema(
  {
    course: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Round', roundSchema);
