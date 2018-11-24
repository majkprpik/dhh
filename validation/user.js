const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}
    
    /*if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters"
    }*/

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = "Name field is required"
    }

    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = "Surname field is required"
    }

    if (Validator.isEmpty(data._role)) {
        errors._role = "Role field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}