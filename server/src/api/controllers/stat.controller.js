const submissions = [];
const teams = [];

// Function to handle submission in the competition
function submitInCompetition(req, res, next) {
  const { teamId, submission, presentation, submissionTime } = req.body;

  const team = teams.find((t) => t.id === teamId);

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
function getTeamStat(req, res, next) {
  const { teamId } = req.params;

  // Assuming you have a function to calculate team stats
  const teamStat = calculateTeamStat(teamId);
  res.json({ teamId, teamStat });
}

// Function to get full statistics
function getFullStat(req, res, next) {
  // Assuming you have a function to calculate overall stats
  const fullStat = calculateFullStat();

  res.json({ fullStat });
}

// Function to get total team submissions
function getTotalTeamSubmissions(req, res, next) {
  const { teamId } = req.params;

  // Assuming you have a function to get total submissions for a team
  const totalSubmissions = getTotalSubmissionsForTeam(teamId);

  res.json({ teamId, totalSubmissions });
}

// Function to get total team questions
function getTotalTeamQuestions(req, res, next) {
  const { teamId } = req.params;

  // Assuming you have a function to get total questions for a team
  const totalQuestions = getTotalQuestionsForTeam(teamId);

  res.json({ teamId, totalQuestions });
}

function getTotalTeamPerfomance(req, res, next) {
  const { teamId } = req.params;
  const totalSubmissions = getTotalSubmissionsForTeam(teamId);
  const totalQuestions = getTotalQuestionsForTeam(teamId);
  res.json({ teamId, totalSubmissions, totalQuestions });
}

// Additional requirements:
// - You might want to add validation middleware to check request bodies.
// - Implement actual functions (calculateTeamStat, calculateFullStat, getTotalSubmissionsForTeam, getTotalQuestionsForTeam).
// - Connect to a database or use appropriate data structures to store and retrieve data.

module.exports = {
  getTeamStat,
  getFullStat,
  getTotalTeamSubmissions,
  submitInCompetition,
  getTotalTeamPerfomance,
};
