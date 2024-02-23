const express = require('express');
const { auth, admin } = require('../middleware/auth');
const {
  addMember,
  getMember,
  updateMember,
  deleteMember,
  getTeam,
  addBeverage,
  updateBeverages,
  addSubmission,
  getQuestion,
  addQA,
  getQAs,
  getQA,
  // admin only routes controllers
  getAllTeams,
  addQuestion,
  getSubmissions,
  getOnlineUsers,
  addAnswer,
} = require('../controllers/teams.controller');

// create a router for handle the team routes
const router = express.Router();

// team authorized routes
router.post('/:team_name/add', auth, addMember);
router.get('/:team_name/:member_id', auth, getMember);
router.put('/:team_name/:member_id', auth, updateMember);
router.delete('/:team_name/:member_id', auth, deleteMember);
router.get('/:team_name', auth, getTeam);

// beverage related routes
router.post('/:team_name/:member_id/beverages', auth, addBeverage);
router.put('/:team_name/:member_id/beverages', auth, updateBeverages);

// submission related routes
router.post('/:team_name/submissions', auth, addSubmission);

// question related routes
router.get('/:team_name/question', auth, getQuestion);

// QA related routes
router.post('/:team_name/qa', auth, addQA);
router.get('/:team_name/qa', auth, getQAs);
router.get('/:team_name/qa/:qa_id', auth, getQA);

// admin only authorized routes
router.get('/', auth, admin, getAllTeams);
router.post('/:team_name/question', auth, admin, addQuestion);
router.get(':/team_name/submission', auth, admin, getSubmissions);
router.post(':/team_name/qa/:qa_id/answer', auth, admin, addAnswer);

module.exports = router;
