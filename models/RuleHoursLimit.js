const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const HoursLimitSchema = new Schema({
  month: {
    type: String,
    required: true
  },
  hoursLimit: {
    type: Number,
    required: true
  }  
})

module.exports = Shift = mongoose.model("rulehourslimit", HoursLimitSchema)
