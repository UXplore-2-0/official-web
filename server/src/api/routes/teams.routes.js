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

// QA related routes
router.post('/:team_id/qa', auth, addQA); // TODO: success
router.get('/:team_id/getqa', auth, getQAs); // TODO: success
router.get('/:team_id/qa/:qa_id', auth, getQA); // TODO: success

// question related routes
router.get('/:team_id/getquestion', auth, getQuestion); // TODO: suucess

// team authorized routes
router.post('/:team_id/add', auth, addMember); // TODO: success
router.get('/:team_id/:member_id', auth, getMember); // TODO: sucess
router.put('/:team_id/:member_id', auth, updateMember); // TODO: sucess
router.delete('/:team_id/:member_id', auth, deleteMember); // TODO: sucess
router.get('/:team_id', auth, getTeam); // TODO: success

// beverage related routes
router.post('/:team_id/:member_id/beverages', auth, addBeverage); // TODO: sucess
router.put('/:team_id/:member_id/beverages', auth, addBeverage); // TODO: success

// submission related routes
router.post('/:team_id/submissions', auth, addSubmission);

// admin only authorized routes
router.post('/:team_id/question', auth, admin, addQuestion);
// router.get(':/team_id/submission', auth, admin, getSubmissions);
router.post('/:team_id/qa/:qa_id/answer', auth, admin, addAnswer); // TODO: success
router.get('/', auth, admin, getAllTeams); // TODO: success

module.exports = router;
