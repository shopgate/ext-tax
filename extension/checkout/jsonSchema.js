const Joi = require('joi')

// checkout schema
const checkoutSchema = Joi.object().keys({
  items: Joi.array().min(1).items(
    Joi.object().keys({
      id: Joi.string().required()
    }).unknown(true))
}).requiredKeys([
  'items'
]).unknown(true) // other keys are allowed as well

// checkout totals schema
const totalsSchema = Joi.array().min(1).items(
  Joi.object().keys({
    id: Joi.string().required(),
    amount: Joi.number().required()
  }).unknown(true)
)
module.exports = {
  checkoutSchema,
  totalsSchema
}
