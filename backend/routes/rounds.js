const express = require('express');

const {
  createRound,
  getAllRounds,
  getSingleRound,
  deleteRound,
  updateRound,
} = require('../controllers/roundController');

const router = express.Router();

// get all rounds
router.get('/', getAllRounds);

// get single round
router.get('/:id', getSingleRound);

// post a round
router.post('/', createRound);

// delete a round
router.delete('/:id', deleteRound);

// update a round
router.patch('/:id', updateRound);

module.exports = router;
