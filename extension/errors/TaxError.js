class TaxError extends Error {
  constructor (cause = {message: ''}) {
    super()

    this.cause = cause
    this.code = 'ETAX'
    this.message = `Tax error: ${cause.message}`
  }
}

module.exports = TaxError
