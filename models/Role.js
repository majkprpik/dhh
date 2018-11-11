const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    permission: {
        type: Schema.Types.ObjectId, ref: 'Permission',
        required: true
    }
})

module.exports = Role = mongoose.model("roles", RoleSchema)