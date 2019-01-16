const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const VacationSchema = new Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    _user: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ["Odbijen", "Prihvaćen", "U tijeku"],
        default: "Odbijen"
    }
})

module.exports = Vacation = mongoose.model("vacations", VacationSchema)