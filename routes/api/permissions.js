const express = require("express")
const router = express.Router()

// Load agent model
const Permission = require("../../models/Permission")

// @route   POST api/permissions
// @desc    Add a permission
// @access  Public
router.post("/", (req, res) => {

    Permission.findOne({ name: req.body.name })
        .then(permis => {
            if(permis) {
                return res.status(400).json({ name: "Permission already exists" })
            } else {
                const newPermis = new Permission({
                    name: req.body.name,
                    view: req.body.view,
                    insert: req.body.insert,
                    update: req.body.update,
                    delete: req.body.delete,
                    request: req.body.request
                })

                newPermis.save()
                    .then(permis => res.json(permis))
                    .catch(err => console.log(err))
                return res.json({success: true});
            }
        })
})

// @route   DELETE api/permissions/:id
// @desc    Remove a permission
// @access  Public
router.delete("/:id", (req, res) => {
    Permission.findOneAndDelete({ _id: req.params.id})
        .then(permis => {
          if(!permis){
            return res.status(404).json({ id: "Permission to delete not fund"});
          } else{
            console.log("Permission removed");
            return res.json({success: true});
          }
        })
        .catch(err => console.log(err));
})

// @route   PATCH api/permissions/:id
// @desc    Update a permission by id
// @access  Public
router.patch("/:id", (req, res) => {

  Permission.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(permis_update => {
        if(!permis_update){
          return res.status(404).json({_id: "Permission to update not found"});
        } else {
          console.log("Permission updated");
          return res.json({success: true});
        }
      })
      .catch(err => console.log(err));
})


// @route   GET api/permissions/:id
// @desc    Get permissions by id
// @access  Public
router.get("/:id", (req, res) => {
    Permission.findById(req.params.id)
        .then(permis => res.json(permis))
        .catch(err => res.status(404).json({ nopermisionsfound: "No permissions were found" }))
})

// @route   GET api/permissions
// @desc    Get all permissions
// @access  Public
router.get("/", (req, res) => {
    Permission.find()
        .then(permis => res.json(permis))
        .catch(err => res.status(404).json({ nopermisionsfound: "No permissions were found" }))
})

module.exports = router
