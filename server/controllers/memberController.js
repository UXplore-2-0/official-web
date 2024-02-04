/* eslint-disable camelcase */
const Member = require('../models/memberModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.addMembers = catchAsync(async (req, res, next) => {
  const {
    team,
    university,
    t01name,
    t01contact,
    t01university_index,
    t02name,
    t02university_index,
    t03name,
    t03university_index,
  } = req.body;

  await Member.create({
    team,
    university,
    t01name,
    t01contact,
    t01university_index,
    t02name,
    t02university_index,
    t03name,
    t03university_index,
  });

  res.status(201).json({
    status: 'success',
  });
});

exports.getMember = catchAsync(async (req, res, next) => {
  const member = await Member.findOne({ team: req.params.teamID });

  if (!member) {
    return next(new AppError('No member found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
  });
});
