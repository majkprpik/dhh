const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const RuleRoleShiftSchema = new Schema({
    _role: {
        type: Schema.Types.ObjectId, ref: 'Role',
        required: true
    },
    _shift: {
        type: Schema.Types.ObjectId, ref: 'Shift',
        required: false
    }
})

module.exports = RuleRoleShift = mongoose.model("ruleRoleShift", RuleRoleShiftSchema)