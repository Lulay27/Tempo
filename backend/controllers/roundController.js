const Round = require('../models/roundModel');
const mongoose = require('mongoose');

// get all rounds
const getAllRounds = async (req, res) => {
  const rounds = await Round.find({});

  res.status(200).json(rounds);
};

// get a single round
const getSingleRound = async (req, res) => {
  const { id } = req.params;

  // checks if id is exactly 24 characters long and consists of 12-byte hexadecimal numbers
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such round' });
  }

  const round = await Round.findOne({ _id: id });

  if (!round) {
    return res.status(404).json({ error: 'No such round' });
  }
  res.status(200).json(round);
};

// create a round
const createRound = async (req, res) => {
  const { course, score, date, comments } = req.body;

  try {
    const round = await Round.create({ course, score, date, comments });
    res.status(200).json(round);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// delete a round
const deleteRound = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such round' });
  }

  const round = await Round.findByIdAndDelete(id);

  if (!round) {
    return res.status(404).json({ error: 'No such round' });
  }

  res.status(200).json(round);
};

// update a round
const updateRound = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such round' });
  }

  const round = await Round.findOneAndUpdate({ _id: id }, { ...req.body });
};

module.exports = {
  getAllRounds,
  getSingleRound,
  createRound,
  deleteRound,
  updateRound,
};
