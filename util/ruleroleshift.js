// Load models
const User = require("../models/User")
const Schedule = require("../models/Schedule")
const Rule = require("../models/RuleRoleShift")
const Role = require("../models/Role")

const isEmpty = require("../validation/isEmpty")


module.exports = async function checkRules() {
    const rules = await getRules()
    const roles = await getRoles()
    const schedule = await getSchedule("5bf80ddf83951e0ca4d44443")

    let errors = {}

    for(d = 0; d < schedule.days.length; d++){//moguc bug
        for(r = 0; r < rules.length; r++){
            let flag = false

            for(s = 0; s < schedule.days[d].shifts.length; s++){
                const user = await getUser(schedule.days[d].shifts[s]._user)
                
                if(String(user._role) === String(rules[r]._role) &&
                String(schedule.days[d].shifts[s]._shift) === String(rules[r]._shift)){
                        flag = true
                    }
            }
            if(!flag){
                errors[rules[r]._id] = "notValid"
            }
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const getRules = function () {
    return Rule.find()
}

const getRoles = function () {
    return Role.find()
}

const getSchedule = function (scheduleId) {
    return Schedule.findOne({ _id: scheduleId })
}

const getUser = function (userId) {
    return User.findOne({ _id: userId })
}