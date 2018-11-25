const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ShiftSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    start: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    },
    roles: [
        {
            _role: {
                type: Schema.Types.ObjectId, ref: 'Role'
            }
        }
    ],
    priority: {
        type: Boolean,
        default: false
    }
})

module.exports = Shift = mongoose.model("shift", ShiftSchema)