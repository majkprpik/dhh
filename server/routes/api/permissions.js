const express = require("express")
const router = express.Router()

// Load agent model
const Permissions = require("../../models/Permissions")

// @route   POST api/permissions/add
// @desc    Add a permission
// @access  Public
router.post("/add", (req, res) => {

    Permissions.findOne({ name: req.body.name })
        .then(permis => {
            if(permis) {
                return res.status(400).json({ name: "Permission already exists" })
            } else {
                const newPermis = new Permissions({
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
                return res.status(200);
            }
        })
})

// @route   POST api/permissions/remove
// @desc    Remove a permission
// @access  Public
router.post("/remove", (req, res) => {
    Permissions.findOneAndDelete({ _id: req.body.id})
        .then(permis => {
          if(!permis){
            return res.status(404).json({ _id: "Permissions to delete not fund"});
          } else{
            return res.status(200).end();
            console.log("Permission removed");
          }
        })
        .catch(err => console.log(err));
})

// @route   PUT api/permissions/update
// @desc    Update a permission
// @access  Public
router.put("/update", (req, res) => {

  Permissions.findOneAndUpdate({_id: req.body.id}, req.body)
      .then(permis_update => {
        if(!permis_update){
          return res.status(404).json({_id: "Permission to update not found"});
        } else {
          console.log("Permission updated");
          return res.status(200).end();
        }
      })
      .catch(err => console.log(err));
})


// @route   GET api/permissions
// @desc    Get all permissions
// @access  Public
router.get("/", (req, res) => {
    Permissions.find()
        .then(permis => res.json(permis))
        .catch(err => res.status(404).json({ nopermisionsfound: "No permissions were found" }))
})

module.exports = router
