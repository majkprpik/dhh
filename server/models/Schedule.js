const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ScheduleSchema = new Schema({
    year: {
        type: String,
        required: true
    },
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
                                type: Schema.Types.ObjectId, ref: 'Shift',
                                required: true
                            },
                            user: {
                                type: Schema.Types.ObjectId, ref: 'User',
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