const express = require('express');
const {
  signUpTeam,
  signUpAdmin,
  login,
  verifyTeam,
  resetPassword,
  requestPasswordReset,
  resetPasswordWithToken,
} = require('../controllers/auth.controller');
const { auth, admin } = require('../middleware/auth');

// create a new Router for the auth routes
const router = express.Router();

router.post('/signup/admin', auth, admin, signUpAdmin); // route for the admin to create a new team
router.post('/signup', signUpTeam);
router.post('/verify/:team_name/:token', verifyTeam);
router.post('/forget-password/reset/:team_id/:token', resetPasswordWithToken);
router.post('/reset/', auth, resetPassword);
router.post('/forget-password', requestPasswordReset);
router.post('/login', login);

module.exports = router;
