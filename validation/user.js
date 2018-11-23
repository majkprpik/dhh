const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required"
    }

    if(!Validator.isLength(data.username, {min: 4, max: 30})) {
        errors.username = "Username must be between 4 and 30 characters"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
    
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters"
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Surname field is required"
    }

    // if (Validator.isEmpty(data.role)) {
    //     errors.name = "Role field is required"
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}