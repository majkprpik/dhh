const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateShiftData(data) {
    let errors = {}

    if (Validator.isEmpty(data.start)) {
        errors.start = "Start field is required"
    }

    if (!Validator.isNumeric(data.start)) {
        errors.start = "Start must be numeric"
    }

    if (Validator.isEmpty(data.duration)) {
        errors.duration = "Duration field is required"
    }

    if (!Validator.isNumeric(data.duration)) {
        errors.duration = "Duration must be numeric"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}