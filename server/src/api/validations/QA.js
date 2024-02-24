const Joi = require('joi');

function validateQuestion(data) {
  const questionSchema = Joi.object({
    question: Joi.string().required(),
  });

  return questionSchema.validate(data);
}

module.exports = {
  validateQuestion,
};
