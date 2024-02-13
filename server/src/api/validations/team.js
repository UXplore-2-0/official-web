const Joi = require('joi');

function validateTeam(data) {
  const teamSchema = Joi.object({
    team_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(1024).required(),
  });

  return teamSchema.validate(data);
}

module.exports = {
  validateTeam,
};
