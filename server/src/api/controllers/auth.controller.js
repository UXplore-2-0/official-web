const { Team } = require('../models');
const { Op } = require('sequelize');
const { validateTeam } = require('../validations/team');
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
  sendMail(token, data.email).catch(console.error);

  return res.json({
    status: true,
    team: {
      team_name: newTeam.team_name,
      email: newTeam.email,
      is_verified: newTeam.is_verified,
    },
  });
}

/**
 * Handles the login process.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function login(req, res, next) {}

module.exports = {
  signUpTeam,
  login,
};
