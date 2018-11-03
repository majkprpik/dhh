const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const AgentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    totalNumberOfHours: {
        type: Number,
        default: 0
    },
    monthlyNumberOfHours: [
        {
            month: {
                type: String
            },
            numberOfHours: {
                type: Number
            }
        }
    ]
})

module.exports = Agent = mongoose.model("agents", AgentSchema)