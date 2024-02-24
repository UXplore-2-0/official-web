const Joi = require('joi');

function validateTeam(data) {
  const teamSchema = Joi.object({
    team_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(1024).required(),
    university: Joi.string().min(5).max(255).required(),
  });

  return teamSchema.validate(data);
}

function validateLogin(data) {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(1024).required(),
  });

  return loginSchema.validate(data);
}

async function validateNewPassword(data) {
  const passwordSchema = Joi.object({
    old_password: Joi.string().min(8).max(1024).required(),
    new_password: Joi.string().min(8).max(1024).required(),
  });

  return passwordSchema.validate(data);
}

async function validatePassword(data) {
  return Joi.object({
    password: Joi.string().min(8).max(1024).required(),
  }).validate(data);
}

async function validateQuestionBody(data) {
  const questionSchema = Joi.object({
    question: Joi.string().min(5).required(),
    question_link: Joi.string().min(5).required(),
  });

  return questionSchema.validate(data);
}

module.exports = {
  validateTeam,
  validateLogin,
  validateNewPassword,
  validatePassword,
  validateQuestionBody,
};
