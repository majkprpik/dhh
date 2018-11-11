const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const PermissionSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    view:{
        type: Number,
        required: true
      },
    insert:{
        type: Number,
        required: true
      },
    update:{
        type: Number,
        required: true
      },
    delete:{
        type: Number,
        required: true
      },
    request:{
        type: Number,
        required: true
      }
})

module.exports = Permission = mongoose.model("permissions", PermissionSchema)
