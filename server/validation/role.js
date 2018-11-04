const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateRoleData(data) {
    let errors = {}

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if(!Validator.isLength(data.name, {min: 3, max: 30})) {
        errors.name = "Name must be between 3 and 30 characters"
    }

    if (Validator.isEmpty(data.permission)) {
        errors.permission = "Permission field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}