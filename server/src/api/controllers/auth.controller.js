const { Team } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const {
  validateTeam,
  validateLogin,
  validateNewPassword,
  validatePassword,
} = require('../validations/team');
const {
  hashPassword,
  generateVerificationToken,
  generateJWT,
} = require('../utils/token');
const { sendMail, sendResetMail } = require('../utils/email');

/**
 * Handles the sign up process for a team.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function signUpTeam(req, res, next) {
  // firts validate the request body
  const { error } = validateTeam(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });

  const data = req.body;
  // check if the tem already exists
  const team = await Team.findOne({
    where: {
      [Op.or]: [{ email: data.email }, { team_name: data.team_name }],
    },
  });

  // if found one then return the error
  if (team)
    return res.status(400).json({
      status: false,
      message: 'Team with this email or team name already exists!',
    });

  // create a new team
  // first hash the password using the bcrypt
  const hash = hashPassword(data.password);
  // generate a token for verfication
  const token = await generateVerificationToken();

  // save the team in the database
  const newTeam = await Team.build({
    team_name: data.team_name,
    email: data.email,
    password: hash,
    verification_token: token,
  });
  // save the team in the database with the verification token
  await newTeam.save();

  // send the email to verfication process
  sendMail(token, data.team_name, data.email).catch(console.error);

  return res.json({
    status: true,
    team: {
      team_name: newTeam.team_name,
      email: newTeam.email,
      is_verified: newTeam.is_verified,
    },
  });
}

async function verifyTeam(req, res, next) {
  // extract the team name and the token from the request
  const team_name = req.params.team_name;
  const token = req.params.token;
  // check whether there is a token with this account
  const team = await Team.findOne({
    attributes: ['team_name', 'email', 'is_verified'],
    where: {
      [Op.and]: [{ team_name: team_name }, { verification_token: token }],
    },
  });
  // if not found a team return as a invalid verification token
  if (!team) {
    return res.status(400).json({
      status: false,
      message: 'Invalid verification token!',
    });
  }

  // if account is already verified return as a account already verified
  if (team.is_verified) {
    return res.status(400).json({
      status: false,
      message: 'Account already verified!',
    });
  }

  // if everything is ok then update the team as a verified team
  await Team.update({ is_verified: true }, { where: { team_name: team_name } });

  return res.json({
    status: true,
    team: {
      team_name: team.team_name,
      email: team.email,
    },
  });
}

/**
 * Handles the login process.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function login(req, res, next) {
  // first validate the request body
  const { error } = validateLogin(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });
  }
  // extract the email and the password from the request body
  const { email, password } = req.body;

  // find the team with the email
  const team = await Team.findOne({
    where: { email: email },
  });

  if (!team) {
    return res.status(404).json({
      status: false,
      message: 'team with this email does not exists!',
    });
  }

  if (!team.is_verified) {
    return res.status(400).json({
      status: false,
      message: 'Account is not verified!',
    });
  }

  // compare the provided password with the password in the database
  bcrypt.compare(password, team.password).then((match) => {
    if (!match) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // create a json web token for the team
    const accessToken = generateJWT({
      team_name: team.team_name,
      team_id: team.team_id,
      role: team.role,
    });

    // return the token with appropriate message
    return res.json({
      status: true,
      message: 'Login successful!',
      token: accessToken,
      role: team.role,
    });
  });
}

async function signUpAdmin(req, res, next) {
  // first validate the request body
  const { error } = validateTeam(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });

  const data = req.body;
  // check if the tem already exists
  const team = await Team.findOne({
    where: {
      [Op.or]: [{ email: data.email }, { team_name: data.team_name }],
    },
  });

  // if found one then return the error
  if (team)
    return res.status(400).json({
      status: false,
      message: 'Team with this email or team name already exists!',
    });

  // create a new team as a admin
  // first hash the password using the bcrypt
  const hash = hashPassword(data.password);
  // save the team in the database
  const newTeam = await Team.build({
    team_name: data.team_name,
    email: data.email,
    password: hash,
    role: 'admin',
    is_verified: true,
    verification_token: 'verified',
  });

  // save the team in the database
  await newTeam.save();

  return res.json({
    status: true,
    team: {
      team_name: newTeam.team_name,
      email: newTeam.email,
      is_verified: newTeam.is_verified,
      role: newTeam.role,
    },
  });
}

async function resetPassword(req, res, next) {
  // eextract the team name and the password from the request
  const team_id = parseInt(req.user.team_id);

  // validate the request body
  const { error } = validateNewPassword(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });

  const data = req.body;

  // fetch the team with this team id
  const team = await Team.findOne({
    where: {
      team_id: team_id,
    },
  });

  if (!team)
    return res.status(404).json({ status: false, message: 'Team not found!' });

  // check whther the old password is correct
  bcrypt.compare(data.old_password, team.password).then(async (match) => {
    if (!match) {
      return res
        .status(401)
        .json({ status: false, message: 'Old password is incorrect!' });
    }

    // hash the new password
    const hash = hashPassword(data.new_password);

    // update the team with the new password
    await Team.update({ password: hash }, { where: { team_id: team_id } });

    return res.json({
      status: true,
      message: 'Password updated successfully!',
    });
  });
}

async function requestPasswordReset(req, res, next) {
  // extract the email from the request
  const email = req.body.email;

  // find a team with this email
  const team = await Team.findOne({
    where: {
      email: email,
    },
  });

  if (!team)
    return res.status(404).json({ status: false, message: 'Team not found!' });

  // generate a token for the password reset
  const token = await generateVerificationToken();
  // save the token in the database
  await Team.update(
    { reset_token: token, reset_valid: true },
    {
      where: {
        email: email,
      },
    }
  );

  // send mail to for verification and reset purposes
  sendResetMail(token, email, team.team_id);

  res.json({
    status: true,
    message: 'Password reset link sent to your email!',
  });
}

async function resetPasswordWithToken(req, res, next) {
  // extract the token and the password from the request
  const token = req.params.token;
  const team_id = parseInt(req.params.team_id);
  const { password } = req.body;

  // find a team with this
  const team = await Team.findOne({
    where: {
      [Op.and]: [{ reset_token: token }, { team_id: team_id }],
    },
  });

  if (!team) {
    return res.status(400).json({
      status: false,
      message: 'Invalid reset token!',
    });
  }

  // validate the new password
  const { error } = validatePassword({ password });
  if (error) {
    return res
      .status(400)
      .json({ status: false, message: error.details[0].message });
  }

  // hash the new password and save it in the database
  const hash = hashPassword(password);

  await Team.update(
    { password: hash, reset_token: null, reset_valid: false },
    { where: { team_id: team_id } }
  );

  return res.json({
    status: true,
    message: 'Password reset successfully!',
  });
}

module.exports = {
  signUpTeam,
  signUpAdmin,
  login,
  verifyTeam,
  resetPassword,
  requestPasswordReset,
  resetPasswordWithToken,
};
