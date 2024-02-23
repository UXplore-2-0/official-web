const express = require('express');
const router = express.Router();
const statController = require('../controllers/stat.controller');

// Define a route to get stats
router.get('/onlinestats', statController.getOnlineStats);
router.get('/totalteams', statController.getTotalUsers);
router.get('/totalsubmission', statController.getTotalSubmissions);

module.exports = router;
