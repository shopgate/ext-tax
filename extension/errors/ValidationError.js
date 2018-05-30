const TaxError = require('./TaxError')

class ValidationError extends TaxError {
  constructor (error) {
    super()

    this.code = 'EVALIDATION'
    this.message = `Validation error ${error}`
    this.error = error
    this.validationErrors = []
  }
}

module.exports = ValidationError
