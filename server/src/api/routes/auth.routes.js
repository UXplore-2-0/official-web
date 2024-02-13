const express = require('express');
const {
  signUpTeam,
  signUpAdmin,
  login,
  verifyTeam,
} = require('../controllers/auth.controller');
const { auth, admin } = require('../middleware/auth');

// create a new Router for the auth routes
const router = express.Router();

router.post('/signup/admin', auth, admin, signUpAdmin);
router.post('/signup', signUpTeam);
router.post('/verify/:team_name/:token', verifyTeam);
router.post('/login', login);

module.exports = router;
