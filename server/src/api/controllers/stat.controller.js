const { Team } = require('../models');

async function getOnlineStats(req, res, next) {
  try {
    const onlineStats = await Team.getOnlineUsers(); 

    res.json(onlineStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTotalUsers(req, res, next) {
  try {
    const totalUsers = await Team.getAllTeams();

    res.json({ value: totalUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTotalSubmissions(req, res, next) {
  try {
    const totalSubmissions = await Team.getSubmissions();
    res.json({ value: totalSubmissions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getOnlineStats,
  getTotalUsers,
  getTotalSubmissions,
};
