// Load models
const User = require("../models/User");
const Schedule = require("../models/Schedule")


module.exports = async function setWorkHours() {
    var users = await User.find()

    for(i = 0; i < users.length; i++){
        console.log(users[i].username)
        console.log(i)
        await getWorkHourForUser(users[i]._id)
    }
}

async function getWorkHourForUser(userId) {
    const schedule = await getSchedule()

    for(m = 0; m < schedule.length; m++){
        var sumOfHours = 0

        for(d = 0; d < schedule[m].days.length; d++){
            for(s = 0; s < schedule[m].days[d].shifts.length; s++){
                if(String(schedule[m].days[d].shifts[s]._user) === String(userId)){
                    const shift = await getShift(schedule[m].days[d].shifts[s]._shift)
                    if(Number(shift.start) > Number(shift.end)){
                        sumOfHours += shift.end + (24 - shift.start)
                    } else {
                        sumOfHours += shift.end - shift.start
                    }
                }
            }
        }
        await User.findById(userId)
            .then(user => {
                var flag = 0
    
                for(i = 0; i < user.monthlyNumberOfHours.length; i++){
                    if(user.monthlyNumberOfHours[i].month === schedule[m].month){
                        user.monthlyNumberOfHours[i].numberOfHours = sumOfHours
                        flag = 1
                    }
                }
    
                if(flag === 0){
                    user.monthlyNumberOfHours.addToSet({month: schedule[m].month, numberOfHours: sumOfHours})
                }
                user.save()
            })
            .catch(err => console.log(err))
    }

    return
}

const getShift = function (shiftId) {
    return Shift.findOne({ _id: shiftId })
}

const getSchedule = function () {
    return Schedule.find()
}