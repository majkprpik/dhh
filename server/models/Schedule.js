const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ScheduleSchema = new Schema({
    months: [
        {
            month: {
                type: String,
                required: true
            },
            days: [
                {
                    day: {
                        type: String,
                        required: true
                    },
                    shifts: [
                        {
                            shift: {
                                type: String,
                                required: true
                            },
                            agentName: {
                                type: String,
                                required: true
                            },
                            agentSurname: {
                                type: String,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = Schedule = mongoose.model("schedules", ScheduleSchema)