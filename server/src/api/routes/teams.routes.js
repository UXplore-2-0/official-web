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
router.post('/qa', auth, addQA); // TODO: success
router.get('/getqa', auth, getQAs); // TODO: success
router.get('/qa/:qa_id', auth, getQA); // TODO: success

// question related routes
router.get('/getquestion', auth, getQuestion); // TODO: suucess

// beverage related routes
router.post('/:member_id/beverages', auth, addBeverage); // TODO: sucess
router.put('/:member_id/beverages', auth, addBeverage); // TODO: success

// submission related routes
router.post('/submissions', auth, addSubmission);

// admin only authorized routes
router.post('/:team_id/question', auth, admin, addQuestion);
// router.get(':/team_id/submission', auth, admin, getSubmissions);
router.post('/:team_id/qa/:qa_id/answer', auth, admin, addAnswer); // TODO: success
router.get('/all', auth, admin, getAllTeams); // TODO: success

// team authorized routes
router.post('/add', auth, addMember); // TODO: success
router.get('/:member_id', auth, getMember); // TODO: sucess
router.put('/:member_id', auth, updateMember); // TODO: sucess
router.delete('/:member_id', auth, deleteMember); // TODO: sucess
router.get('/', auth, getTeam); // TODO: success

module.exports = router;
