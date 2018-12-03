const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateShiftData(data) {
    let errors = {}

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (data.start < 0) {
        errors.start = "Start field must be larger than zero"
    }

    // if (!Validator.isNumeric(data.start)) {
    //     errors.start = "Start must be numeric"
    // }

    if (data.end < 0) {
        errors.end = "End field must be larger than zero"
    }

    // if (!Validator.isNumeric(data.end)) {
    //     errors.end = "End must be numeric"
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}