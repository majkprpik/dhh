const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateShiftData(data) {
    let errors = {}

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (Validator.isEmpty(String(data.start))) {
        errors.start = "Start field is required"
    }

    if (!Validator.isNumeric(String(data.start))) {
        errors.start = "Start must be numeric"
    }

    if (Validator.isEmpty(String(data.end))) {
        errors.end = "End field is required"
    }

    if (!Validator.isNumeric(String(data.end))) {
        errors.end = "End must be numeric"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}