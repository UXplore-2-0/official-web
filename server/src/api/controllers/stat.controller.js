const statsDummyData = [
  { title: 'Total Users', value: 391 },
  { title: 'Total Submission', value: 249 },
  { title: 'Online', value: 25 },
];

function getOnlineStats(req, res, next) {
  res.json(statsData);
}

function getTotalTeams(req, res, next) {
  res.json({ value: 391 });
}

function PostTotalSubmission(req, res, next) {
  res.json({ value: 249 });
}

module.exports = {
  getOnlineStats,
  getTotalTeams,
  PostTotalSubmission,
};
