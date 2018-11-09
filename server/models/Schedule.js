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
                            user: [
                                {
                                    type: Schema.Types.ObjectId, ref: 'User'
                                }
                            ] 
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = Schedule = mongoose.model("schedules", ScheduleSchema)