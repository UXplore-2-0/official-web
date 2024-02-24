const Joi = require('joi');

function validateNotification(notification) {
  const schema = Joi.object({
    message_title: Joi.string().required(),
    message: Joi.string().required(),
  });

  return schema.validate(notification);
}

module.exports = {
  validateNotification,
};
