// Load models
const User = require("../models/User");
const Schedule = require("../models/Schedule")


module.exports = async function setVacationDays() {
    var users = await User.find()

    for (const id of users) {
        console.log(id._id)
        await calculateVacationDays(id._id)
    }
}

async function calculateVacationDays(userId) {
    const schedule = await getSchedule()

    for (m = 0; m < schedule.length; m++) {
        var vacationNumber = 0

        for (d = 0; d < schedule[m].days.length; d++) {
            for (s = 0; s < schedule[m].days[d].shifts.length; s++) {
                if (String(schedule[m].days[d].shifts[s]._user) === String(userId)) {
                    const shift = await getShift(schedule[m].days[d].shifts[s]._shift)
                    if(shift.name === "GO"){
                        vacationNumber += 1
                    }
                }
            }
        }
        await User.findById(userId)
            .then(user => {
                user.vacationDays = user.vacationDays - vacationDays
                user.save()
            })
            .catch(err => console.log(err))
    }
}

const getShift = function (shiftId) {
    return Shift.findOne({ _id: shiftId })
}

const getSchedule = function () {
    return Schedule.find()
}