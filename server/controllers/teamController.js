const Team = require('../models/teamModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getTeam = catchAsync(async (req, res, next) => {
  const team = await Team.find({ _id: req.params.teamID }).populate(
    'memberData'
  );

  if (!team) {
    return next(new AppError('No team found with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      team,
    },
  });
});

exports.getAllTeams = catchAsync(async (req, res, next) => {
  const teams = await Team.find({ emailVerified: true });

  res.status(200).json({
    status: 'success',
    results: teams.length,
    data: {
      teams,
    },
  });
});
