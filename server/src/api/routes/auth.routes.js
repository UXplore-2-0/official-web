const express = require('express');
const {
  signUpTeam,
  login,
  verifyTeam,
} = require('../controllers/auth.controller');

// create a new Router for the auth routes
const router = express.Router();

router.post('/signup', signUpTeam);
router.post('/verify/:team_name/:token', verifyTeam);
router.post('/login', login);

module.exports = router;
