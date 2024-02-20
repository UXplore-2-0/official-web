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
  addAnswer,
} = require('../controllers/teams.controller');

// create a router for handle the team routes
const router = express.Router();

// team authorized routes
router.post('/:team_id/add', auth, addMember);
router.get('/:team_id/:member_id', auth, getMember);
router.put('/:team_id/:member_id', auth, updateMember);
router.delete('/:team_id/:member_id', auth, deleteMember);
router.get('/:team_id', auth, getTeam);

// beverage related routes
router.post('/:team_id/:member_id/beverages', auth, addBeverage);
router.put('/:team_id/:member_id/beverages', auth, addBeverage);

// submission related routes
router.post('/:team_id/submissions', auth, addSubmission);

// question related routes
router.post('/:team_id/getquestion', auth, getQuestion);

// QA related routes
router.post('/:team_id/qa', auth, addQA);
router.post('/:team_id/getqa', auth, getQAs);
router.get('/:team_id/qa/:qa_id', auth, getQA);

// admin only authorized routes
router.get('/', auth, admin, getAllTeams);
router.post('/:team_id/question', auth, admin, addQuestion);
// router.get(':/team_id/submission', auth, admin, getSubmissions);
router.post('/:team_id/qa/:qa_id/answer', auth, admin, addAnswer);

module.exports = router;
