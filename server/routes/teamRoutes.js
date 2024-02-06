const express = require('express');
const teamController = require('../controllers/teamController');
const authController = require('../controllers/authController');
const memberController = require('../controllers/memberController');

const router = express.Router();

// @route: POST api/v1/teams/signup
// @desc: Create New Team
// @access: Public
router.post('/signup', authController.signUp);

// @route: PATCH api/v1/teams/activate/:token
// @desc: Activate Team
// @access: Public
router.patch('/activate/:token', authController.activateTeam);

// @route POST api/v1/teams/addMembers
// @desc Add Members
// @access Public
router.post('/addMembers', memberController.addMembers);

// @route GET api/v1/teams/getMember/:teamID
// @desc Get Member
// @access Public

router.get('/getMember/:teamID', memberController.getMember);

// @route: POST api/v1/teams/login
// @desc: Login Team
// @access: Public
router.post('/login', authController.login);

// @route GET api/v1/teams/:teamID
// @desc Get Team
// @access Public

router.get('/:teamID', teamController.getTeam);

// @route: GET
// @desc: Get All Team's Name
// @access: Public

// router.get('/get-team-names', teamController.getTeamNames);

module.exports = router;
