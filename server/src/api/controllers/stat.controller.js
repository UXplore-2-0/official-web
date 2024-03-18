const { Sequelize, where, Op } = require('sequelize');
const { Team, Member, Question } = require('../models');

/**
 * Retrieves the full stat.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function getFullStat(req, res, next) {
  // team related stats
  const teamCount = await Team.count();
  // number of admin accounts
  const adminCount = await Team.count({
    where: {
      role: 'admin',
    },
  });
  const userAccount = teamCount - adminCount;

  // verfied not admin account
  const verifiedCount = await Team.count({
    where: {
      is_verified: true,
      role: 'team',
    },
  });

  // total non member accounts
  const nonMemberAccount = await Team.count({
    where: {
      is_verified: true,
      role: {
        [Op.ne]: 'admin',
      },
    },
    include: [
      {
        model: Member,
        required: false,
        where: {
          member_id: null,
        },
      },
    ],
  });

  // one member teams
  const oneMemberTeamCount = await Team.count({
    include: [
      {
        model: Member,
        required: true,
      },
    ],
    group: ['Team.team_id'],
    having: Sequelize.where(
      Sequelize.fn('COUNT', Sequelize.col('Members.member_id')),
      1
    ),
  });

  const twoMemberTeamCount = await Team.count({
    include: [
      {
        model: Member,
        required: true,
      },
    ],
    group: ['Team.team_id'],
    having: Sequelize.where(
      Sequelize.fn('COUNT', Sequelize.col('Members.member_id')),
      2
    ),
  });

  const threeMemberTeamCount = await Team.count({
    include: [
      {
        model: Member,
        required: true,
      },
    ],
    group: ['Team.team_id'],
    having: Sequelize.where(
      Sequelize.fn('COUNT', Sequelize.col('Members.member_id')),
      3
    ),
  });

  // member related stats
  const memberCount = await Member.count();
  // total number of leaders
  const leaderCount = await Member.count({
    where: {
      is_leader: true,
    },
  });
  // total number of veg members
  const vegCount = await Member.count({
    where: {
      beverages: 'veg',
    },
  });
  const nonVegCount = memberCount - vegCount; // total number of non-veg members

  // submission related stats
  const submissionCount = await Question.count({
    where: {
      is_submitted: true,
    },
  });

  return res.json({
    teamCount,
    memberCount,
    submissionCount,
    // teams related stats
    teams: {
      teamCount: teamCount,
      adminCount: adminCount,
      userCount: userAccount,
      verifiedCount: verifiedCount,
      nonMemberTeamCount: nonMemberAccount,
      oneMemberTeamCount: oneMemberTeamCount.length,
      twoMemberTeamCount: twoMemberTeamCount.length,
      threeMemberTeamCount: threeMemberTeamCount.length,
    },
    // members related stats
    members: {
      membersCount: memberCount,
      leaderCount: leaderCount,
      vegCount: vegCount,
      nonVegCount: nonVegCount,
    },
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
