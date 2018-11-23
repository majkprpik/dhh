const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const UserSchema = new Schema({
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
    _role: {
        type: Schema.Types.ObjectId, ref: 'Role',
        required: true
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

module.exports = User = mongoose.model("users", UserSchema)