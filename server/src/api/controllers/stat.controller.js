const { Team, QA, Member } = require('../models');

const submissions = [];

// Function to handle submission in the competitionm
async function submitInCompetition(req, res, next) {
  const { teamId, QA, presentation, submissionTime } = req.body;

  const team = await Team.find((t) => t.id === teamId);

  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  // Add submission to the submissions array
  submissions.push({
    teamId,
    submission,
    presentation,
    submissionTime,
  });

  // You can perform any additional logic here, such as updating team stats or storing more information.

  res.status(201).json({ message: 'Submission successful' });
}

// Function to get team statistics
async function getTeamStat(req, res, next) {
  const { teamId } = req.params;

  // Assuming you have a function to calculate team stats
  const teamStat = await alculateTeamStat(teamId);
  res.json({ teamId, teamStat });
}

// Function to get full statistics
async function getFullStat(req, res, next) {
  // Assuming you have a function to calculate overall stats
  const fullStat = await calculateFullStat();

  res.json({ fullStat });
}

// Function to get total team submissions
function getTeamSubmissions(req, res, next) {
  const { teamId } = req.params;

  // Assuming you have a function to get total submissions for a team
  const totalSubmissions = getTotalSubmissionsForTeam(teamId);

  res.json({ teamId, totalSubmissions });
}

function getTotalTeamPerfomance(req, res, next) {
  const { teamId } = req.params;
  const totalSubmissions = getTotalSubmissionsForTeam(teamId);
  const totalQuestions = getTotalQuestionsForTeam(teamId);
  res.json({ teamId, totalSubmissions, totalQuestions });
}

function getTotalNoOfSubmissions(req, res, next) {
  const totalSubmissions = getTotalSubmissions();
  res.json({ totalSubmissions });
}

function getTeamPerfomance(req, res, next) {
  const { teamId } = req.params;
  const totalSubmissions = getTotalSubmissionsForTeam(teamId);
  const totalQuestions = getTotalQuestionsForTeam(teamId);
  res.json({ teamId, totalSubmissions, totalQuestions });
}

module.exports = {
  getTeamStat,
  getFullStat,
  getTeamSubmissions,
  getTotalNoOfSubmissions,
  getTeamPerfomance,
  getTotalTeamPerfomance,
};
