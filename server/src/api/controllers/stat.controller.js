// server/src/api/controllers/stat.controller.js

// In a real application, you would fetch data from a database or another source
const statsData = [
  { title: 'Total Submission', value: 249 },
  { title: 'Online', value: 25 },
  // Add more stats as needed
];

// Controller function to get stats
const getStats = (req, res) => {
  res.json(statsData);
};

module.exports = {
  getStats,
};
