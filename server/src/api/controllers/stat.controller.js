const { where } = require('sequelize');
const { Team, Member, Question } = require('../models');

/**
 * Retrieves the full stat.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function getFullStat(req, res, next) {
  const teamCount = await Team.count();
  const memberCount = await Member.count();
  const submissionCount = await Question.count({
    where: {
      is_submitted: true,
    },
  });

  return res.json({
    teamCount,
    memberCount,
    submissionCount,
  });
}

/**
 * Retrieves the team statistics.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function getTeamStat(req, res, next) {}

module.exports = {
  getFullStat,
  getTeamStat,
};
