const TaxError = require('./TaxError')

class InternalError extends TaxError {
  constructor (cause = {message: ''}) {
    super()

    this.cause = cause
    this.code = 'EINTERNAL'
    this.message = `An internal error occurred ${cause.message}`
  }
}

module.exports = InternalError
