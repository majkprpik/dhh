const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ScheduleSchema = new Schema({
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
                    _shift: {
                        type: Schema.Types.ObjectId, ref: 'Shift',
                        required: true
                    },
                    _user: {
                        type: Schema.Types.ObjectId, ref: 'User',
                        required: true
                    }
                }
            ]
        }
    ]
})

module.exports = Schedule = mongoose.model("schedules", ScheduleSchema)