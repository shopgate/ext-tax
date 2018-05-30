const Joi = require('joi')
const ValidationError = require('./../common/Error/ValidationError')
const {totalsSchema} = require('./jsonSchema')

/**
 * @typedef {Object} ValidateCheckoutInput
 * @property {Object} checkout
 * @property {Object[]} totals
 */

/**
 * @param {SDKContext} context
 * @param {ValidateCheckoutInput} input
 * @return {Promise<undefined>}
 */
module.exports = async (context, input) => {
  let validationResult = Joi.validate(input.totals, totalsSchema)
  if (validationResult.error) {
    throw new ValidationError(validationResult.error.details[0].message)
  }
}
