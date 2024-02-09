const express = require('express');

// create a router for handle the team routes
const router = express.Router();

router.get('/api/v1/teams', (req, res) => {
  res.status(200).send('Get all teams');
});
