const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateShiftData(data) {
    let errors = {}

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (!Validator.isAlpha(data.name)) {
        errors.name = "Name must be a string"
    }

    if (Validator.isEmpty(data.start)) {
        errors.start = "Start field is required"
    }

    if (!Validator.isNumeric(data.start)) {
        errors.start = "Start must be numeric"
    }

    if (Validator.isEmpty(data.end)) {
        errors.end = "End field is required"
    }

    if (!Validator.isNumeric(data.end)) {
        errors.end = "End must be numeric"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}