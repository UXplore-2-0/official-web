const Joi = require('joi');

function validateMember(data) {
  const memberSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    nic: Joi.string().max(15).required(),
    uni_index: Joi.string().required(),
    contact_no: Joi.string().max(10).required(),
    beverages: Joi.string().valid('Veg', 'Non-Veg').required(),
    is_leader: Joi.boolean().optional(),
  });

  return memberSchema.validate(data);
}

function validateBeverage(data) {
  const beverageSchema = Joi.object({
    beverage: Joi.enum('Veg', 'Non-veg').required(),
  });

  return beverageSchema.validate(data);
}

module.exports = { validateMember, validateBeverage };
