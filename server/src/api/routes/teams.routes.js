const express = require('express');
const { auth, admin } = require('../middleware/auth');
const {
  addMember,
  getMember,
  updateMember,
  deleteMember,
  getTeam,
  addBeverage,
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
  getSubmission,
  addScore,
  getScores,
} = require('../controllers/teams.controller');
const { uploadFile } = require('../controllers/file.controller');
const multer = require('multer');

// create multer instance for file uploading
const upload = multer();
// create a router for handle the team routes
const router = express.Router();

// file upload route
router.post('/upload', auth, upload.single('file'), uploadFile);

// QA related routes
router.post('/qa/:qa_id/answer', auth, admin, addAnswer);
router.post('/qa', auth, addQA);
router.get('/qa/all', auth, getAllQAs);
router.get('/getqa', auth, getQAs);
router.get('/qa/:qa_id', auth, getQA);

// question related routes
router.get('/getquestion', auth, getQuestion);

// beverage related routes
router.post('/:member_id/beverages', auth, addBeverage);
router.put('/:member_id/beverages', auth, addBeverage);

// submission related routes
router.post('/submissions', auth, addSubmission);

// admin only authorized routes
router.post('/question', auth, admin, addQuestion);
router.get('/submissions', auth, admin, getSubmissions);
router.post('/submissions/score', auth, admin, addScore);
router.get('/all', auth, admin, getAllTeams);
router.delete('/delete/:team_id', auth, admin, deleteTeam);

// team authorized routes
router.get('/submission', auth, getSubmission);
router.get('/status', getStatus);
router.post('/add', auth, addMember);
router.get('/:member_id', auth, getMember);
router.put('/:member_id', auth, updateMember);
router.delete('/:member_id', auth, deleteMember);
router.get('/scores', auth, getScores);
router.get('/', auth, getTeam);

module.exports = router;
