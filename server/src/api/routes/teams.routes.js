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
  getStatus,
  deleteTeam,
  getAllQAs,
} = require('../controllers/teams.controller');

// create a router for handle the team routes
const router = express.Router();

// QA related routes
router.post('/qa/:qa_id/answer', auth, admin, addAnswer); // TODO: success
router.post('/qa', auth, addQA); // TODO: success
router.get('/qa/all', auth, getAllQAs); // TODO: success
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
router.post('/question', auth, admin, addQuestion); // TODO: suucess
router.get('/submissions', auth, admin, getSubmissions);
router.get('/all', auth, admin, getAllTeams); // TODO: success
router.delete('/delete/:team_id', auth, admin, deleteTeam); // TODO: success

// team authorized routes
router.get('/status', getStatus); // TODO: success
router.post('/add', auth, addMember); // TODO: success
router.get('/:member_id', auth, getMember); // TODO: sucess
router.put('/:member_id', auth, updateMember); // TODO: sucess
router.delete('/:member_id', auth, deleteMember); // TODO: sucess
router.get('/', auth, getTeam); // TODO: success

module.exports = router;
