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

  const discounts = totals.find(total => total.id === 'discounts')
  const subTotal = totals.find(total => total.id === 'subtotal')

  let beforeTaxes = subTotal.amount
  if (discounts) {
    beforeTaxes -= discounts.amount
  }

  const taxRate = 19
  const taxAmount = Math.round(beforeTaxes * taxRate) / 100

  totals.push({
    id: 'tax',
    amount: taxAmount
  })

  return {
    totals
  }
}
