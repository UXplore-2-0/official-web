const mongoose = require('mongoose');
const Team = require('../models/teamModel');
const catchAsync = require('./catchAsync');

const createAdminUserIfNotExists = catchAsync(async (req, res, next) => {
  if (mongoose.connection.readyState === 0) {
    // Database connection not established yet, wait for connection to be established
    mongoose.connection.once('open', async () => {
      await createAdminUserIfNotExists(req, res, next);
    });
    return;
  }

  const adminUser = await Team.findOne({ email: 'admin@gmail.com' });
  if (!adminUser) {
    const newAdminUser = new Team({
      email: 'admin@gmail.com',
      team_name: 'admin',
      password: 'admin@123', // default password
      isAdmin: true,
    });
    await newAdminUser.save({ validateBeforeSave: false });
    console.log('Admin user created');
  }
  next();
});

module.exports = createAdminUserIfNotExists;
