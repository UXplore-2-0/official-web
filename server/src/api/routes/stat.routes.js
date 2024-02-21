const express = require('express');
const { auth, admin } = require('../middleware/auth'); 
const {
  getTeamStat,
  getFullStat,
  getTotalNoOfSubmissions,
  getTotalTeamSubmissions,
  getTotalTeamPerfomance,
} = require('../controllers/stat.controller');

// create a router for handle the stat routes
const router = express.Router();

router.get('/', auth, admin, getFullStat);
router.get('/:team_name', auth, admin, getTeamStat);
router.get('/:team_name/submissions', auth, admin, getTotalNoOfSubmissions);
router.get(
  '/:team_name/Totalsubmissions',
  auth,
  admin,
  getTotalTeamSubmissions
);
router.get('/:team_name/Totalperfomance', auth, admin, getTotalTeamPerfomance);

module.exports = router;
