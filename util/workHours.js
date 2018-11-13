// Load models
const User = require("../models/User");
const Schedule = require("../models/Schedule")


module.exports = async function setWorkHours(userId) {
    var sumOfHours = 0

    const schedule = await getSchedule({ month: "01/2018" })

    for(d = 0; d < schedule.days.length; d++){
        for(s = 0; s < schedule.days[d].shifts.length; s++){
            if(String(schedule.days[d].shifts[s]._user) === String(userId)){
                const shift = await getShift(schedule.days[d].shifts[s]._shift)
                if(Number(shift.start) > Number(shift.end)){
                    sumOfHours += shift.end + (24 - shift.start)
                } else {
                    sumOfHours += shift.end - shift.start
                }
            }
        }
    }
    await User.findByIdAndUpdate(userId, {totalNumberOfHours: sumOfHours}, { new: true })
        .then(user => console.log(user))
        .catch(err => console.log(err))
}

const getShift = function (shiftId) {
    return Shift.findOne({ _id: shiftId })
}

const getSchedule = function (month) {
    return Schedule.findOne({month: "01/2018"})
}