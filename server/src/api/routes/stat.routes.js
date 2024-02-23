// server/src/api/routes/stat.routes.js

const express = require('express');
const router = express.Router();
const statController = require('../controllers/stat.controller');

// Define a route to get stats
router.get('/stats', statController.getStats);

module.exports = router;
