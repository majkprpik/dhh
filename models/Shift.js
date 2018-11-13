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
    }
})

module.exports = Shift = mongoose.model("shift", ShiftSchema)