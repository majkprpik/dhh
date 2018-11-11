// Load models
const User = require("../models/User");
const Schedule = require("../models/Schedule")


module.exports = function setWorkHours(userId) {
    var sumOfHours = 0

    Schedule.findOne({month: "01/2018"})
        .then(schedule => {
            var d, s

            for(d = 0; d < schedule.days.length; d++){
                for(s = 0; s < schedule.days[d].shifts.length; s++){
                    if(String(schedule.days[d].shifts[s]._user) === String(userId)){
                        Shift.findOne({ _id: schedule.days[d].shifts[s]._shift })
                            .then(shift => {
                                sumOfHours += shift.duration
                            })
                    }
                }
            }
        })
    
    User.findByIdAndUpdate(userId, {totalNumberOfHours: sumOfHours})
        .then(user => console.log(user))
        .catch(err => console.log(err))
}