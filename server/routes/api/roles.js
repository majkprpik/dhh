const express = require("express")
const router = express.Router()

// Load agent model
const Role = require("../../models/Role")

// @route   POST api/roles/add
// @desc    Add a role
// @access  Public
router.post("/add", (req, res) => {
    Role.findOne({ name: req.body.name })
        .then(role => {
            if(role) {
                return res.status(400).json({ name: "Role already exists" })
            } else {
                const newRole = new Role({
                    name: req.body.name,
                    permission: req.body.permission
                })

                newRole.save()
                    .then(role => res.json(role))
                    .catch(err => console.log(err))
            }
        })
})

// @route   GET api/roles
// @desc    Get all roles
// @access  Public
router.get("/", (req, res) => {
    Role.find()
        .then(roles => res.json(roles))
        .catch(err => res.status(404).json({ norolesfound: "No roles where found" }))  
})

module.exports = router