const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const UserSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    vacationDays: {
        type: Number,
        default: 0
    },
    _role: {
        type: Schema.Types.ObjectId, ref: 'Role',
        required: true
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

module.exports = User = mongoose.model("users", UserSchema)