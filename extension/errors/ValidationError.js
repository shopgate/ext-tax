const TaxError = require('./TaxError')

class ValidationError extends TaxError {
  constructor (error) {
    super()

    this.code = 'EINV'
    this.message = `Validation error ${error}`
    this.error = error
  }
}

module.exports = ValidationError
