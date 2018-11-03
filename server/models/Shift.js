const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ShiftSchema = new Schema({
    start: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = Shift = mongoose.model("shift", ShiftSchema)