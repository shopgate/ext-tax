const TaxError = require('./../errors/TaxError')
/**
 * @typedef {Object} GetTotalsInput
 * @property {Object} checkout
 * @property {Object[]} totals
 */

/**
 * @typedef {Object} GetTotalsOutput
 * @property {Object[]} totals
 */

/**
 * @param {SDKContext} context
 * @param {GetTotalsInput} input
 * @returns {Promise<GetTotalsOutput>}
 */
module.exports = async (context, input) => {
  const totals = input.totals

  // calculate sub total for items
  const beforeTaxes = input.checkout.items
    .map(item => item.unitPrice * item.quantity)
    .reduce(
      (sum, amount) => sum + amount,
      0
    )

  const taxRate = 19
  const taxAmount = Math.round(beforeTaxes * taxRate / 100)

  totals.push({
    id: 'tax',
    label: 'Tax',
    amount: taxAmount
  })

  return {
    totals
  }
}
