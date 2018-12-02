const express = require("express")
const router = express.Router()

// Load input validation
const validateRoleInput = require("../../validation/role")

// Load agent model
const Role = require("../../models/Role")

// @route   POST api/roles
// @desc    Add a role
// @access  Public
router.post("/", (req, res) => {
    const { errors, isValid } = validateRoleInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }

    Role.findOne({ name: req.body.name })
        .then(role => {
            if (role) {
                return res.status(400).json({ message: "Role already exists" })
            } else {
                const newRole = new Role(req.body)

                newRole.save()
                    .then(role => res.json(role))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/roles/:id
// @desc    Remove a role by id
// @access  Public
router.delete("/:id", (req, res) => {
    Role.findOneAndDelete({ _id: req.params.id })
        .then(role => {
            if (!role) {
                return res.status(404).json({ message: "Role to delete not fund" });
            } else {
                console.log("Role removed");
                return res.json({ message: "Role removed" });
            }
        })
        .catch(err => console.log(err));
})

// @route   PATCH api/roles/:id
// @desc    Update a role by id
// @access  Public
router.patch("/:id", (req, res) => {
    const { errors, isValid } = validateRoleInput(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }

    Role.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(role_update => {
            if (!role_update) {
                return res.status(404).json({ message: "Role to update not found" });
            } else {
                console.log("Role updated");
                return res.json(role_update);
            }
        })
        .catch(err => console.log(err));

})

// @route   GET api/roles/:id
// @desc    Get role by id
// @access  Public
router.get("/:id", (req, res) => {
    Role.findById(req.params.id)
        .then(shifts => res.json(shifts))
        .catch(err => res.status(404).json({ message: "No role was found" }))
})

// @route   GET api/roles
// @desc    Get all roles
// @access  Public
router.get("/", (req, res) => {
    Role.find()
        .then(roles => res.json(roles))
        .catch(err => res.status(404).json({ message: "No roles where found" }))
})

module.exports = router
