const express = require('express');
const router = express.Router();
const statController = require('../controllers/stat.controller');

// Define a route to get stats
router.get('/onlinestats', statController.getStats);
router.get('/totalteams', statController.getTotalTeams);
router.post('/totalsubmission', statController.PostTotalSubmission);

module.exports = router;
