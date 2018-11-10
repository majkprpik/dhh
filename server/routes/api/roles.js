const express = require("express")
const router = express.Router()

// Load input validation
const validateRoleInput = require("../../validation/role")

// Load agent model
const Role = require("../../models/Role")

// @route   POST api/roles/add
// @desc    Add a role
// @access  Public
router.post("/add", (req, res) => {
    const { errors, isValid } = validateRoleInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

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

// @route   POST api/roles/remove
// @desc    Remove a role
// @access  Public
router.post("/remove", (req, res) => {
    Role.findOneAndDelete({ _id: req.body._id})
        .then(role => {
          if(!role){
            return res.status(404).json({ _id: "Role to delete not fund"});
          } else{
            console.log("Role removed");
            return res.json( {success: true} );
          }
        })
        .catch(err => console.log(err));
})

// @route   PUT api/roles/update
// @desc    Update a role
// @access  Public
router.put("/update", (req, res) => {
  const { errors, isValid } = validateRoleInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Role.findOneAndUpdate({_id: req.body.id}, req.body)
      .then(role_update => {
        if(!role_update){
          return res.status(404).json({_id: "Role to update not found"});
        } else {
          console.log("updated");
          return res.json( {success: true} );
        }
      })
      .catch(err => console.log(err));

})

// @route   GET api/roles/get
// @desc    Get role by id
// @access  Public
router.get("/get", (req, res) => {
    Role.findById(req.body._id)
        .then(shifts => res.json(shifts))
        .catch(err => res.status(404).json({ norolefound: "No role was found" }))
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
