const { Team } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { validateTeam, validateLogin } = require('../validations/team');
const {
  compare,
  hashPassword,
  generateVerificationToken,
} = require('../utils/token');
const sendMail = require('../utils/email');

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

  // compare the provided password with the password in the database
  bcrypt.compare(password, team.password).then((match) => {
    if (!match) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // create a json web token for the team
    const accessToken = jwt.sign(
      { team_name: team.team_name, team_id: team.team_id },
      'secret',
      { expiresIn: '1d' }
    );

    // return the token with appropriate message
    return res.json({
      status: true,
      message: 'Login successful!',
      token: accessToken,
    });
  });
}

module.exports = {
  signUpTeam,
  login,
  verifyTeam,
};
