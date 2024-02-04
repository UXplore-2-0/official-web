const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Team = require('../models/teamModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Email = require('../utils/email');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (team, statusCode, res) => {
  const token = signToken(team._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV.trim() === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  //Remove password from output when team is created
  team.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      team,
    },
  });
};

//* Team SignUp
exports.signUp = catchAsync(async (req, res, next) => {
  const { teamName, email } = req.body;

  const newTeam = await Team.create({
    teamName,
    email,
  });

  const activateToken = newTeam.createActivationString();

  // const activateURL = `${req.protocol}://${req.get(
  //   'host'
  // )}/api/v1/teams/activate/${activateToken}`;

  const activateURL = `${req.protocol}://${process.env.FRONTEND_HOST}/activate/${activateToken}`;

  await new Email(newTeam, activateURL).sendVerificationToken();

  res.status(201).json({
    status: 'success',
  });
});

//* Team Login

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 01.) Check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // 02.) Check if user exists && password is correct
  const team = await Team.findOne({ email }).select('+password');

  if (!team || !(await team.correctPassword(password, team.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 03.) Send token to client
  createSendToken(team, 200, res);
  // console.log(`${email} successfully logged in !`);
});

//* Team Activation

exports.activateTeam = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  // console.log(hashedToken);

  const team = await Team.findOne({
    activationString: hashedToken,
  });

  if (!team) {
    return next(new AppError('Invaild Token', 400));
  }

  team.emailVerified = true;
  await team.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    message: 'Email verified successfully',
    data: {
      team: team._id,
    },
  });
});

//* Implementing Protected Routes

exports.protect = catchAsync(async (req, res, next) => {
  //01.) Get token and Check whether it is available
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }

  //02.) Verification Token

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // promisify: convert callback function to promise

  //03.) Check if user still exists

  const freshTeam = await Team.findById(decoded.id);
  //decoded.id is the id of the user who is logged in.In this case the payload is {id: user._id, iat: timestamp}

  if (!freshTeam) {
    return next(
      new AppError('The team belonging to this token does no longer exist', 401)
    );
  }

  //04.) Check if user changed password after the token was issued.

  if (freshTeam.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again', 401)
    );
  }

  //05.) Grant access to protected route
  req.team = freshTeam;

  //06.) To the next middleware
  next();
});

//* Restricting to certain roles

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    // roles is an array ['admin', 'teams']
    if (!roles.includes(req.team.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
