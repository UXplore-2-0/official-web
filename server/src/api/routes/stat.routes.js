const express = require('express');
const { getFullStat, getTeamStat } = require('../controllers/stat.controller');
const { auth, admin } = require('../middleware/auth');

// create a router for handle the stat routes
const router = express.Router();

router.get('/', auth, admin, getFullStat);
router.get('/:team_name', auth, admin, getTeamStat);

module.exports = router;
