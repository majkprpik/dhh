const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateRuleData(data) {
    let errors = {}

    if (Validator.isEmpty(data._role)) {
        errors.name = "Role field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}