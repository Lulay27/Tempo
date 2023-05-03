const express = require('express');

const { createRound, getAllRounds } = require('../controllers/roundController');

const router = express.Router();

// get all rounds
router.get('/', getAllRounds);

// get single round

// post a round
router.post('/', createRound);

// delete a round

// update a round

module.exports = router;
